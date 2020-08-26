SELECT DISTINCT time_slot_id, users.name, users.email, choice
FROM votes
JOIN time_slots ON time_slot_id=time_slots.id
JOIN users ON user_id=users.id
JOIN polls ON poll_id=polls.id
WHERE polls.url='123'
ORDER BY time_slot_id;
