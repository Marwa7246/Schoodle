SELECT name, email, time_slot_id, choice
FROM users
JOIN votes ON user_id=users.id
WHERE token='15t5'
;
