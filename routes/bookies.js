/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into /bookies,
 *   these routes are mounted onto /bookies
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  // router.get("/:id", (req, res) => {
  //   let urlString = req.params.id;

  //   let templateVars = { urlString }
  //   console.log('templateVars: ' , templateVars);
  //   res.render('index', templateVars)

  // });



  return router;
};
