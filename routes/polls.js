/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  ////////////////////////////1- DELETE A POLL ////////////////////


  router.delete("/:poll_id", (req, res) => {
    let query = `DELETE FROM polls WHERE id = $1`;
    db.query(query, [req.params.poll_id])
      .then(data => {
        res.json('ok');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  })

////////////////////////////2- ADD A NEW POLL FROM THE FORM////////////////////
  router.post("/", (req, res) => {
    let formData = req.body;


    const insertPoll = (formData) => {
      let valuesPoll =[formData.name.value, formData.email.value, formData.title.value, formData.description.value, formData.location.value, formData.url];
      console.log('valuesPollInsert: ', valuesPoll)
      let query = ` INSERT INTO polls (name, email, title, description, location, url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
      return db.query(query, valuesPoll);

    }

    MakeTimeSlotsObject = function(obj1) {
      let obj2 = {}
      for (const key in obj1) {
        let x = obj1[key].name
        let values = obj1[key].value
        let id =obj1[key].time_slot_id;
        if (!obj2[id]) {
          obj2[id] ={}
        }
        obj2[id][x]= values

      }
      return obj2
    }

    const obj2 = MakeTimeSlotsObject(formData.time_slots)

    const insertOneTimeSlot = (row, pollId) => {
        const valuesTime = [row.start_date, row.end_date, row.start_time, row.end_time, pollId];
        let query = ` INSERT INTO time_slots (start_date, end_date, start_time, end_time, poll_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        return db.query(query, valuesTime);
    }


    insertPoll(formData)
      .then(data => {
        console.log("datat in insert: ", data.rows)
        const pollId = data.rows[0].id;
        for (const key in obj2) {
          let row = obj2[key]
          insertOneTimeSlot(row, pollId)
          .then(data => {
            //console.log(data)
            res.send(data)})
            .catch(e => {
              console.error(e);
              res.send(e)
            });
        }
      })
      .catch(e => {
        console.error(e);
        res.send(e)
      });
 })




/////////////////// 3- GET THE POLL DETAILS WHEN GOING TO THE PRE VOTE PAGE OR WHEN GOING TO THE VOTING PAGE

  router.get('/:url', (req, res) => {
    const loadPoll = function(url) {
      return db.query(`
      SELECT polls.*, time_slots.* FROM polls JOIN time_slots ON polls.id=poll_id WHERE url=$1 `, [url])
      .then(data => {
        //console.log('responseLoadPoll: ', data.rows);
        return data.rows});
    }
    console.log('params=', req.params.url, typeof req.params.url)
    const url2 = req.params.url;
    loadPoll(url2)
    .then(polls => res.send({polls}))
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });


///////////////////////// 4- ADD NEW VOTE////////////////////
router.post("/votes", (req, res) => {
  let formData = req.body;
  console.log('formdataPOSTVOTE: ', formData)


  const insertUser = (formData) => {
    let valuesUser =[formData.name.value, formData.email.value, formData.token];
    console.log('valuesUserInsert: ', valuesUser)
    let query = ` INSERT INTO users (name, email, token) VALUES ($1, $2, $3) RETURNING *`;
    return db.query(query, valuesUser);

  }


  const insertOneVote = (arr, userId) => {
      const valuesVote = [arr[0], userId, arr[1]];
      console.log('valuesVote: ', valuesVote)

      let query = ` INSERT INTO votes (time_slot_id, user_id, choice) VALUES ($1, $2, $3) RETURNING *`;
      return db.query(query, valuesVote);
  }


  MakeVoteArray = function(obj1){
    const arr =[];
    for (const key in obj1.time_slots){
      const singleRow= [obj1.time_slots[key].time_slot_id, true];
      arr.push(singleRow);
    //console.log(arr)
    }
    return arr
  };

const valuesVoteArrays = MakeVoteArray(formData);

  insertUser(formData)
    .then(data => {
      console.log("data in insertVOTE: ", data.rows)
      const userId = data.rows[0].id;
      console.log('userId: ', userId)
      Promise.all (valuesVoteArrays.map(row => insertOneVote(row, userId).then(data=>data.rows)))
      .then(data => res.send(data))
    })
    .catch(e => {
      console.error(e);
      res.send(e)
    });
})

///////////////////////////5- UPDATE A VOTE WITH TOKEN////////////////////////
router.put("/votes", (req, res) => {
  let formData = req.body;
console.log(req.body)
  const updateUser = (formData) => {
    let valuesUser =[formData.name, formData.email, formData.token];
    console.log('valuesUserUpdate: ', valuesUser)
    let query = ` UPDATE users SET name=$1, email=$2 WHERE token=$3 RETURNING *`;
    return db.query(query, valuesUser);
  }

  const updateVote = (formData) => {
    let valuesVote =[formData.choice, formData.token, formData.time_slot_id];
    console.log('valuesVoteUpdate: ', valuesVote)
    let query = ` UPDATE votes SET choice=$1 FROM users WHERE user_id=users.id AND token=$2 AND time_slot_id=$3 RETURNING *`;
    return db.query(query, valuesVote);
  }

  updateUser(formData)
    .then(data => {
      console.log("data in update user: ", data.rows)
      })
      updateVote(formData)
      .then(data => {
        console.log("data in update votes: ", data.rows)
        res.send(data)})
    .catch(e => {
      console.error(e);
      res.send(e)
    });
})


///////////////////////////////6-GET A SPECIFIC POOL VOTES FOR THE STATISTICS PAGE///////////////////

router.get('/votes/:url', (req, res) => {
  const countVote = function(url) {
    return db.query(`
    SELECT time_slots.id, count(votes.choice)
    FROM votes
    JOIN time_slots ON time_slot_id=time_slots.id
    JOIN polls ON poll_id=polls.id
    JOIN users ON user_id=users.id
    WHERE polls.url=$1 AND choice=TRUE
    GROUP BY time_slots.id, time_slot_id
    ORDER BY time_slot_id;
                       `, [url])
    .then(data => {
      //console.log('responseLoadPoll: ', data.rows);
      return data.rows});
  }
  //console.log('params=', req.params.url, typeof req.params.url)
  const urlVote = req.params.url;
  countVote(urlVote)
  .then(votes => res.send({votes}))
  .catch(e => {
    console.error(e);
    res.send(e)
  });
});



  return router;
};
