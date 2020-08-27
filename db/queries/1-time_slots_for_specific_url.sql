SELECT * FROM time_slots
JOIN polls ON polls.id=poll_id
WHERE polls.url='KNdrZhDxRC56Ycy2uJcpz920a1VVuHIq'
ORDER BY start_date, start_time;

select * from polls;
