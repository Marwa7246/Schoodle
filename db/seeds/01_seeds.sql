INSERT INTO owners (name, email) VALUES
('Armand Hilll', 'lera_hahn@dickens.org'),
('Stephanie Wolff', 'darius.homenick@tod.ca'),
('Stan Miller', 'mcdermott.maxie@schoen.com');


INSERT INTO polls (owner_id, title, description, location, url, name, email) VALUES
(1, 'Speed lamp', 'description', 'zoom', '123', 'Armand Hilll', 'lera_hahn@dickens.org'),
(2, 'Blanck corner', 'description', 'google meet', '456', 'Stephanie Wolff', 'darius.homenick@tod.ca'),
(2, 'Fun glad', 'description', 'Slack', '567', 'Stephanie Wolff', 'darius.homenick@tod.ca');

INSERT INTO time_slots (poll_id, start_date, end_date, start_time, end_time) VALUES
(1, '2020-09-11', '2020-09-26', '18:00', '19:00'),
(1, '2020-09-11', '2020-09-26', '08:00', '12:00'),
(1, '2021-10-01', '2021-10-14', '10:00', '14:00');

INSERT INTO users (name, email, token)
VALUES
( 'Armand', 'lera@dickens.org', '15t5'),
( 'Stephanie', 'darius@tod.ca', '14WE'),
( 'Stan', 'mcdermott@schoen.com', 'zxcd'),
( 'Hilll', 'hahn@dickens.org', '1245'),
( 'Wolff', 'homenick@tod.ca', '14fE'),
( 'Frank', 'frank@schoen.com', 'zacd'),
( 'David', 'david@dickens.org', '12s6'),
( 'Carla', 'carla@tod.ca', '1rWE'),
( 'Emily', 'emily@schoen.com', 'zxcd');


INSERT INTO votes (time_slot_id, user_id, choice)
VALUES
(1, 1, TRUE),
(2, 1, TRUE),
(3, 1, TRUE),
(2, 2, FALSE),
(3, 3, TRUE),
(1, 4, False),
(2, 5, TRUE),
(3, 6, TRUE),
(1, 7, FALSE),
(2, 8, FALSE),
(3, 9, FALSE);




