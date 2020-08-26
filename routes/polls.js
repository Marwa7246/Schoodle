/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.delete("/:poll_id", (req, res) => {
    let query = `DELETE FROM polls WHERE id = $1`;
    console.log(query);
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

////////////////////////////ADD A NEW POLL FROM THE FORM////////////////////
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




///////////////////GET THE POLL DETAILS WHEN GOING TO THE PRE VOTE PAGE OR WHEN GOING TO THE VOTING PAGE

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


/////////////////////////ADD NEW VOTE////////////////////
router.post("/votes", (req, res) => {
  let formData = req.body;

  const insertUser = (formData) => {
    let valuesUser =[formData.name.value, formData.email.value, formData.token];
    console.log('valuesUserInsert: ', valuesUser)
    let query = ` INSERT INTO users (name, email, token) VALUES ($1, $2, $3) RETURNING *`;
    return db.query(query, valuesUser);

  }

  MakeVotesObject = function(obj1) {
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

  const obj2 = MakeVotesObject(formData.votes)



  const insertOneVote = (row, userId) => {
      const valuesVote = [row.time_slot_id, userId, row.choice];
      let query = ` INSERT INTO votes (time_slot_id, user_id, choice) VALUES ($1, $2, $3) RETURNING *`;
      return db.query(query, valuesVote);
  }


  insertUser(formData)
    .then(data => {
      console.log("data in insert: ", data.rows)
      const userId = data.rows[0].id;
      // for (const key in obj2) {
      //   let row = obj2[key]
      //   insertOneVote(row, pollId)
      //   .then(data => {
      //     console.log(data)
      //     res.send(data)})
      //   .catch(e => {
      //     console.error(e);
      //     res.send(e)
      //   });
      // }
    })
    .catch(e => {
      console.error(e);
      res.send(e)
    });
})

/////////////////////////////UPDATE A VOTE WITH TOKEN////////////////////////
// router.put("/votes", (req, res) => {
//   let formData = req.body;
// console.log(req.body)
//   const updateUser = (formData) => {
//     let valuesUser =[formData.name, formData.email, formData.token];
//     console.log('valuesUserUpdate: ', valuesUser)
//     let query = ` UPDATE users SET name=$1, email=$2 WHERE token=$3 RETURNING *`;
//     return db.query(query, valuesUser);
//   }

//   const updateVote = (formData) => {
//     let valuesVote =[formData.choice, formData.token, formData.time_slot_id];
//     console.log('valuesVoteUpdate: ', valuesVote)
//     let query = ` UPDATE votes SET choice=$1 FROM users WHERE user_id=users.id AND token=$2 AND time_slot_id=$3 RETURNING *`;
//     return db.query(query, valuesVote);
//   }

//   updateUser(formData)
//     .then(data => {
//       console.log("data in update user: ", data.rows)
//       })
//       updateVote(formData)
//       .then(data => {
//         console.log("data in update votes: ", data.rows)
//         res.send(data)})
//     .catch(e => {
//       console.error(e);
//       res.send(e)
//     });
// })





  return router;
};
