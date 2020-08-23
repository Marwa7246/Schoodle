INSERT INTO users (name, email) VALUES
('Armand Hilll', 'lera_hahn@dickens.org'),
('Stephanie Wolff', 'darius.homenick@tod.ca'),
('Stan Miller', 'mcdermott.maxie@schoen.com');


INSERT INTO polls (owner_id, title, description, location, url) VALUES
(1, 'Speed lamp', 'description', 'zoom', 'http://localhost:8080/?123'),
(2, 'Blanck corner', 'description', 'google meet', 'http://localhost:8080/?456'),
(2, 'Fun glad', 'description', 'Slack', 'http://localhost:8080/?456');

INSERT INTO time-slots (poll_id, start_date, end_date, start_time, end_time) VALUES
(1, '2018-09-11', '2018-09-26', '18:00', '19:00'),
(1, '2019-01-04', '2019-02-01', '08:00', '12:00'),
(1, '2021-10-01', '2021-10-14', '10:00', '14:00');

INSERT INTO votes (time-slot_id, name, email, choice, token)
VALUES
(1, 'Armand Hilll', 'lera_hahn@dickens.org', TRUE, '12s5'),
(2, 'Stephanie Wolff', 'darius.homenick@tod.ca', FALSE, '14WE'),
(3, 'Stan Miller', 'mcdermott.maxie@schoen.com', TRUE, 'zxcd');


