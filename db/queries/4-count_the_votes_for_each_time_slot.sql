SELECT time_slot_id, count(*), users.name
FROM votes
JOIN time_slots ON time_slot_id=time_slots.id
JOIN users ON users.id = user_id
JOIN polls ON poll_id=polls.id
WHERE polls.url='123' AND choice=TRUE
GROUP BY time_slot_id, users.name
ORDER BY time_slot_id;
