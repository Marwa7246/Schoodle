/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM polls`;
    console.log(query);
    db.query(query)
      .then(data => {
        const widgets = data.rows;
        res.json({ widgets });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });


  const addPoll = (title) => {
    const queryStr = {
      text: `INSERT INTO polls(title) VALUES ($1) RETURNING *`,
      values: [title],
    };

    return db.query(queryStr).then((data) => data.rows[0]);
  };


  router.post("/", (req, res) => {
    const { title } = req.body;

    addPoll(title)
      .then((poll) => {
        console.log("poll", poll);
        res.json(poll);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
