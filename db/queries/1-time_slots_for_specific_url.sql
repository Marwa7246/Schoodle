SELECT * FROM time_slots
JOIN polls ON polls.id=poll_id
WHERE polls.url='8OBN0XTiR2pPvdEF2uiSU1QfjmSdKmTa'
ORDER BY start_date, start_time;

select * from polls;
