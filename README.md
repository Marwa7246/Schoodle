# Bookie

This app is single-page event scheduler, based off of [Doodle](https://doodle.com/).
* The event creator can provide information about it, set up to 4 time-slots, and share the created event via a unique-ID link - or delete it, if unhappy with it.
* The guests are allowed to select multiple choices, and to edit or delete their entry. Once their vote is submitted, a graph and a table are presented, to display the other guests participating and their availability.

Bookie is the collaborative mid-term project for the Lighthouse Labs Web Development bootcamp. Its front-end is built through HTML, SASS and jQuery. Requests to the back-end are entirely made via AJAX. The server is built through NodeJS, and uses Express as framework. The database is managed via PostgreSQL.

## Screenshots

Landing page.
![landing-page](https://github.com/Marwa7246/bookie/blob/master/docs/landing-page.png)

Event form: all fields are required. The 'Add entry' button adds each time an additional time slot.
![form](https://github.com/Marwa7246/bookie/blob/master/docs/form.png)

Completed form: it presents the details of the event. A link to it is available, together with the options to delete it or copy the link to clipboard.
![completed-form](https://github.com/Marwa7246/bookie/blob/master/docs/completed-form.png)

Vote form: this is where the invitee provides their info and their availability.
![guest-vote](https://github.com/Marwa7246/bookie/blob/master/docs/guest-vote.png)

Results page: a list of participants and their availability. 
![results](https://github.com/Marwa7246/bookie/blob/master/docs/results.png)

## Getting Started

1. Clone this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Visit <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 10.x or above
- NPM 5.x or above
- express 4.17.1 or above
- jquery 3.5.1 or above
- PG 6.4.2 or above
- pg-native 3.0.0 or above
- body-parser 1.19.0 or above
- chalk 2.4.2 or above
- morgan 1.9.1 or above,
- dotenv 2.0.0 or above
- ejs 2.6.2 or above
- node-sass-middleware 0.11.0 or above
