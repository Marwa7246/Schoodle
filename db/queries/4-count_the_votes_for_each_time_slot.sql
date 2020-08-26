SELECT time_slot_id, count(*)
FROM votes
JOIN time_slots ON time_slot_id=time_slots.id
JOIN polls ON poll_id=polls.id
WHERE polls.url='123' AND choice=TRUE
GROUP BY time_slot_id
ORDER BY time_slot_id;
