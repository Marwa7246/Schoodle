SELECT time_slot_id, count(*), users.name
FROM votes
JOIN time_slots ON time_slot_id=time_slots.id
JOIN users ON users.id = user_id
JOIN polls ON poll_id=polls.id
WHERE polls.url='L4iEjdtA0UM6Nv7zJ4OEV3n3wcgh2NPA' AND choice=TRUE
GROUP BY time_slot_id, users.name
ORDER BY time_slot_id;


SELECT time_slots.*, count(votes.choice)
FROM votes
RIGHT JOIN time_slots ON time_slots.id=time_slot_id
WHERE time_slots.id IN (
  SELECT time_slots.id
FROM time_slots
JOIN polls ON polls.id=poll_id
WHERE polls.url='jvAZSXkFwjbAJIRdL4WgxM5VOBeSo4DH'
)
GROUP BY time_slots.id
ORDER BY time_slots.id;

SELECT time_slots.id
FROM time_slots
JOIN polls ON polls.id=poll_id
WHERE polls.url='jvAZSXkFwjbAJIRdL4WgxM5VOBeSo4DH';

select * from polls;

L4iEjdtA0UM6Nv7zJ4OEV3n3wcgh2NPA

INSERT INTO votes (time_slot_id, user_id, choice)
VALUES
(10, 9, TRUE),
(11, 9, TRUE);


SELECT time_slots.*, users.name AS user_name
    FROM time_slots
    JOIN votes ON time_slots.id=time_slot_id
    JOIN users ON users.id=user_id
    WHERE choice=TRUE AND time_slots.id IN (
    SELECT time_slots.id
        FROM time_slots
        JOIN polls ON polls.id=poll_id
        WHERE polls.url='123'
      )
    GROUP BY time_slots.id
    ORDER BY time_slots.id
    ;
