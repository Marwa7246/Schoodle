SELECT * FROM time_slots
JOIN polls ON polls.id=poll_id
WHERE polls.url='f3m2HKO5u9jtxuBrdY7N8n3s2fRc7nJH'
ORDER BY start_date, start_time;

select * from polls;
