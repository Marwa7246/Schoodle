SELECT time_slot_id, start_date, start_time, end_date, end_time, choice
FROM votes
JOIN time_slots ON time_slot_id=time_slots.id
JOIN polls ON poll_id=polls.id
WHERE polls.url='http://localhost:8080/?123' AND name IN (
  SELECT name
  FROM votes
  JOIN time_slots ON time_slot_id=time_slots.id
  WHERE token='12s5'
)
ORDER BY time_slot_id;
