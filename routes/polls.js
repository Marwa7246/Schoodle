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

  router.get("/:id", (req, res) => {
    let urlString = req.params.id;

    let templateVars = { urlString }
    console.log('templateVars: ' , templateVars);
    res.render('index', templateVars)

  });


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
