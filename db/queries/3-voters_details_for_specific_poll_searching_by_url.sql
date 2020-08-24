SELECT DISTINCT time_slot_id, name, email, choice
FROM votes
JOIN time_slots ON time_slot_id=time_slots.id
JOIN polls ON poll_id=polls.id
WHERE polls.url='http://localhost:8080/?123'
ORDER BY time_slot_id;
