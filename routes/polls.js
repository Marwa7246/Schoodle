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


  const getPollById = function(id) {
    return db.query(`
    SELECT title, id, location FROM polls
    WHERE id=$1
    `, [id])
    .then(res => {
      console.log('responseId: ', res.rows[0]);
      return res.rows[0]});
  }

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

  router.get("/:id", (req, res) => {
    let query = `SELECT * FROM polls`;
    console.log(query);
    db.query(query)
      .then(data => {
        const polls = data.rows;

        const templateVars=JSON.parse(polls);
        console.log(templateVars)
        //res.json({ polls });
        res.render('index', templateVars)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
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



  return router;
};
