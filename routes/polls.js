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
;        if (!obj2[id]) {
          obj2[id] ={}
        }
        obj2[id][x]= values
;

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
                .then(data => {
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
      .catch(e => {
        console.error(e);
        res.send(e)
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

  const loadPoll = function(id) {

    return db.query(`
    SELECT polls.*, time_slots.* FROM polls JOIN time_slots ON polls.id=poll_id WHERE polls.id=${id} ;
    `)
    .then(data => {
      console.log('responseReservation: ', data.rows);
      return data.rows});
  }

  router.get('/:id', (req, res) => {
    // console.log('params=', req.params.id)
    db.query(`SELECT * from polls;`)
    // loadPoll(req.params.id)
    .then(polls => {
      console.log(polls.rows, "this is the polls")
      res.send({polls})
    })
    .catch(e => {
      console.error(e);
      res.send(e)
    });
  });


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




  // const pollPost = function (bookieData) {
    // console.log(bookieData)
  router.post("/", (req, res) => {


    let query = `
    INSERT INTO
      polls (name, title, description, location, url)
      VALUES ($1, $2, $3, $4, $5);`
    for (let key in req.params.time_slots) {
      query += `INSERT INTO
      time_slots (poll_id, start_date, end_date, start_time, end_time)
      VALUES ($${key.start_date}, $${key.end_date}, $${key.start_time}, $${key.end_time})`
    };
    console.log(query);
    db.query(query, [req.params.name, req.params.email, req.params.title, req.params.description, req.params.location])
      .then(data => {
        res.json();
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    })
  // }

  return router;
};
