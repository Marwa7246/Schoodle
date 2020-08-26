UPDATE votes
SET choice=FALSE
FROM users WHERE user_id=users.id
AND name= 'Wolffq' AND votes.time_slot_id=2
;


