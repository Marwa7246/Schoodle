INSERT INTO owners (name, email) VALUES
('Armand Hilll', 'lera_hahn@dickens.org'),
('Stephanie Wolff', 'darius.homenick@tod.ca'),
('Stan Miller', 'mcdermott.maxie@schoen.com');


INSERT INTO polls (owner_id, title, description, location, url) VALUES
(1, 'Speed lamp', 'description', 'zoom', 'http://localhost:8080/?123'),
(2, 'Blanck corner', 'description', 'google meet', 'http://localhost:8080/?456'),
(2, 'Fun glad', 'description', 'Slack', 'http://localhost:8080/?456');

INSERT INTO time_slots (poll_id, start_date, end_date, start_time, end_time) VALUES
(1, '2020-09-11', '2020-09-26', '18:00', '19:00'),
(1, '2020-09-11', '2020-09-26', '08:00', '12:00'),
(1, '2021-10-01', '2021-10-14', '10:00', '14:00');

INSERT INTO votes (time_slot_id, name, email, choice, token)
VALUES
(1, 'Armand', 'lera@dickens.org', TRUE, '12s5'),
(2, 'Armand', 'lera@dickens.org', TRUE, '13e5'),
(3, 'Armand', 'lera@dickens.org', TRUE, '15t5'),
(2, 'Stephanie', 'darius@tod.ca', FALSE, '14WE'),
(3, 'Stan', 'mcdermott@schoen.com', TRUE, 'zxcd'),
(1, 'Hilll', 'hahn@dickens.org', False, '1245'),
(2, 'Wolff', 'homenick@tod.ca', TRUE, '14fE'),
(3, 'Frank', 'frank@schoen.com', TRUE, 'zacd'),
(1, 'David', 'david@dickens.org', FALSE, '12s6'),
(2, 'Carla', 'carla@tod.ca', FALSE, '1rWE'),
(3, 'Emily', 'emily@schoen.com', FALSE, 'zxcd');




