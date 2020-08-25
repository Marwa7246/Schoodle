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


  router.post("/", (req, res) => {
    let formData = req.body;
    let valuesOwner=[formData.name.value, formData.email.value];

    const insertOwner = (valuesOwner) => {
      let query = ` INSERT INTO owners (name, email) VALUES ($1, $2) RETURNING *`;
      return db.query(query, valuesOwner)
    }
    const insertPoll = (formData, ownerId) => {
      let valuesPoll =[formData.title.value, formData.description.value, formData.location.value, ownerId];
      let query = ` INSERT INTO polls (title, description, location, owner_id) VALUES ($1, $2, $3, $4) RETURNING *`;
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



    insertOwner(valuesOwner)
       .then(data => {
          const ownerId = data.rows[0].id;
          insertPoll(formData, ownerId)
            .then(data => {
              const pollId = data.rows[0].id;
              for (const key in obj2) {
                let row = obj2[key]
                insertOneTimeSlot(row, pollId)
                .then(data => console.log(data.rows))
                .catch(err => {
                  res
                    .status(500)
                    .json({ error: err.message })
                });
              }
            })
            .catch(err => {
              res
                .status(500)
                .json({ error: err.message });
            });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });



  })

  // const getPollById = function(id) {
  //   return db.query(`
  //   SELECT title, id, location FROM polls
  //   WHERE id=$1
  //   `, [id])
  //   .then(res => {
  //     console.log('responseId: ', res.rows[0]);
  //     return res.rows[0]});
  // }

  //Get the information of a poll after using the url
  // router.get("/:id", (req, res) => {
  //   let id = req.params.id;
  //   //let templateVars = getPollById(id);
  //   getPollById(id).
  //   then(data => {
  //     console.log('responseId: ', data);
  //     return data;
  //   });

  //   res.render('index', data);

  // });

  // router.get("/:id", (req, res) => {
  //   let query = `SELECT * FROM polls`;
  //   console.log(query);
  //   db.query(query)
  //     .then(data => {
  //       const polls = data.rows;

  //       const templateVars=JSON.parse(polls);
  //       console.log(templateVars)
  //       //res.json({ polls });
  //       res.render('index', templateVars)
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // });




  // router.get("/:poll_id", (req, res) => {

  //   let query = `SELECT * FROM polls WHERE id = $1`;
  //   console.log(query);
  //   db.query(query, [req.params.poll_id])
  //     .then(data => {
  //       res.json('ok');
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // })



  return router;
};
