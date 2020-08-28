/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();



////////////TRANSFORM DATA OBJECT INTO ARRAY TO USE IN THE QUERIES////////////////////
function MakeVoteArray(obj1){
const arr =[];
for (const key in obj1.time_slots){
  const singleRow= [obj1.time_slots[key].value, true];
  arr.push(singleRow);
}
return arr
};

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
      let query = ` INSERT INTO polls (name, email, title, description, location, url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
      return db.query(query, valuesPoll);

    }

    const insertOneTimeSlot = (row, pollId) => {
      const valuesTime = [...row , pollId];
        let query = ` INSERT INTO time_slots (start_date, end_date, start_time, end_time, poll_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        return db.query(query, valuesTime);
    }

    const MakeTimeSlotsObject = function(obj1) {
      const obj2 = {}
      for (const key in obj1.time_slots) {
        const x = obj1.time_slots[key].name
        const values = obj1.time_slots[key].value
        const id =obj1.time_slots[key].time_slot_id;
        if (!obj2[id]) {
          obj2[id] ={}
        }
        obj2[id][x]= values

      }
      return obj2
    }

    const MakeTimeSlotArray = (obj2) => {
      let arr =[];
      for (const key in obj2) {
        let valuesTime =[]
        valuesTime = [obj2[key].start_date, obj2[key].end_date, obj2[key].start_time, obj2[key].end_time]
        arr.push(valuesTime)
      }
      return arr
    }


    const valuesTimeSlotsArrays = MakeTimeSlotArray(MakeTimeSlotsObject(formData));


    insertPoll(formData)
      .then(data => {
        const pollId = data.rows[0].id;
        Promise.all (valuesTimeSlotsArrays.map(row => insertOneTimeSlot(row, pollId).then(data=>data.rows)))
      .then(data => {
        res.send(data)})


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
        return data.rows});
    }
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


  const insertUser = (formData) => {
    let valuesUser =[formData.name.value, formData.email.value, formData.token];
    let query = ` INSERT INTO users (name, email, token) VALUES ($1, $2, $3) RETURNING *`;
    return db.query(query, valuesUser);

  }


  const insertOneVote = (arr, userId) => {
    const valuesVote = [arr[0], userId, arr[1]];

    let query = ` INSERT INTO votes (time_slot_id, user_id, choice) VALUES ($1, $2, $3) RETURNING *`;
    return db.query(query, valuesVote);
  }


const valuesVoteArrays = MakeVoteArray(formData);

  insertUser(formData)
    .then(data => {
      const userId = data.rows[0].id;
      Promise.all (valuesVoteArrays.map(row => insertOneVote(row, userId).then(data=>data.rows)))
      .then(data => {
        res.send(data)})
    })
    .catch(e => {
      console.error(e);
      res.send(e)
    });
})

//////////////////////////////////5- UPDATE A VOTE//////////////////////////////////////////////
router.put("/votes/:token", (req, res) => {
  let formData = req.body;

  const updateUser = (formData) => {
    let valuesUser =[formData.name.value, formData.email.value, req.params.token];
    let query = ` UPDATE users SET name=$1, email=$2 WHERE token=$3 RETURNING *`;
    return db.query(query, valuesUser);
  }
  const insertOneVote = (arr, userId) => {
    const valuesVote = [arr[0], userId, arr[1]];

    let query = ` INSERT INTO votes (time_slot_id, user_id, choice) VALUES ($1, $2, $3) RETURNING *`;
    return db.query(query, valuesVote);
  }



const valuesVoteArrays = MakeVoteArray(formData);




  const deleteVotes =  (token) => {
    let query = `DELETE FROM votes WHERE user_id IN (SELECT users.id FROM users WHERE token = $1) `;
    return db.query(query, [token])
  }

  const getUserId =  (token) => {
    let query = ` SELECT users.id FROM users WHERE token = $1 `;
    return db.query(query, [token])
  }


  updateUser(formData)
    .then(data => {
      })
      deleteVotes(req.params.token)
      .then(data => {
        console.log('deleting ended')
        res.json('ok');
      })
      getUserId(req.params.token)
      .then(data => {
      Promise.all (valuesVoteArrays.map(row => insertOneVote(row, data.rows[0].id).then(data=>data.rows)))
      .then(data => {
        })
      })
    .catch(e => {
      console.error(e);
      res.send(e)
    });
})

///////////////////////////////6-GET A SPECIFIC POOL VOTES FOR THE STATISTICS PAGE///////////////////

router.get('/votes/:url', (req, res) => {
  const countVote = function(url) {
    return db.query(`
    SELECT time_slots.*, count(votes.choice) AS y
      FROM votes
      RIGHT JOIN time_slots ON time_slots.id=time_slot_id
      WHERE choice=TRUE AND time_slots.id IN (
        SELECT time_slots.id
          FROM time_slots
          JOIN polls ON polls.id=poll_id
          WHERE polls.url=$1
          )
      GROUP BY time_slots.id
      ORDER BY time_slots.id;
    `, [url])
    .then(data => {
      return data.rows});
  }


  const urlVote = req.params.url;
  countVote(urlVote)
  .then(votes => {
    res.send({votes});
  })
  .catch(e => {
    console.error(e);
    res.send(e)
  });
});



  return router;
};
