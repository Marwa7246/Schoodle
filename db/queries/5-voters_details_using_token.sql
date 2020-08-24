SELECT name, email
FROM votes
JOIN time_slots ON time_slot_id=time_slots.id
WHERE token='12s5'
;
