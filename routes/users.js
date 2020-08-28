/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();





module.exports = (db) => {

  //////////////////////DELETE A USER USING THE TOKEN/////////////////////////////

  router.delete("/:token", (req, res) => {
    console.log("req.params.token: ",req.params.token)
    let query = `DELETE FROM users WHERE token = $1`;
    db.query(query, [req.params.token])
      .then(data => {
        res.json('ok');
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });




  ///////////////////////////////2-GET A SPECIFIC POOL VOTES FOR THE STATISTICS PAGE///////////////////

router.get('/:url', (req, res) => {
  const countVoteUsers = function(url) {
    return db.query(`
    SELECT time_slots.id, users.name AS user_name
    FROM time_slots
    JOIN votes ON time_slots.id=time_slot_id
    JOIN users ON users.id=user_id
    JOIN polls ON polls.id=poll_id
    WHERE url=$1 AND choice=TRUE
    GROUP BY time_slots.id, user_name
    ORDER BY time_slots.id
    ;
                       `, [url])
    .then(data => {
      console.log('users: ', data.rows);
      return data.rows});
  }


  const urlVote = req.params.url;
  countVoteUsers(urlVote)
  .then(users => {
    res.send({users})})
  .catch(e => {
    console.error(e);
    res.send(e)
  });
});




  return router;
};
