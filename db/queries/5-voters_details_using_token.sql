SELECT name, email, time_slot_id, choice
FROM users
JOIN votes ON user_id=users.id
WHERE token='15t5'
;
DELETE FROM votes WHERE user_id IN (SELECT users.id FROM users WHERE token = 'nRxl');
