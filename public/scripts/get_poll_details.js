// const copyToClipboard = require ('../helpers/copyToClipboard');

// // Function to add a poll object details to the vote page

const getPollDetails = function(object) {


  const $poll = $(`<div class="new-poll">
                  <h5> ${object.id}</h5>
                  <h5> ${object.title}</h5>
                  <h3>${object.location}</h3>
                  </div>`);



  $('#polls-container').append($poll);



};

//Send the poll to the html file
function loadPoll(urlString) {
  console.log('beeeep')
  $.ajax({url: urlString, method: 'GET'})
    .then((response) => {
      console.log(response)
      //getPollDetails(response);
    });
}

loadPoll('/api/polls/1')
