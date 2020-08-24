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

  return router;
};
