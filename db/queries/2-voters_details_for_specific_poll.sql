SELECT time_slot_id, name, email, choice
FROM votes
JOIN users ON user_id=users.id
JOIN time_slots ON time_slot_id=time_slots.id
WHERE poll_id=1
ORDER BY time_slot_id;
