SELECT votes.id, time_slot_id, start_date, start_time, end_date, end_time, choice, users.name, token
FROM votes
JOIN time_slots ON time_slot_id=time_slots.id
JOIN users ON user_id=users.id
JOIN polls ON poll_id=polls.id
WHERE polls.url='123' AND users.name IN (
  SELECT name
  FROM users
  WHERE users.id='50'
)
ORDER BY time_slot_id;
