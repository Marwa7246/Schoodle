//Check if the url has any string after localhost:8080/
  //If search query found---> go to the vote page(make the botton appear )
  //If not---> load the landing page configuration


  const urlQuery = window.location.search;

  console.log(('urlQuery: '+ urlQuery));

  // if (urlQuery) {
  //   $('#html-container').empty()
  //   console.log(('urlstring after if statement: '+ urlQuery));
  //   const $url = $(`<h5 class="card-title">${urlQuery}</h5>`);

  // $('.card-title').replaceWith($url);
  // }

$(document).ready(function () {
    $('#go-to-home-page').hide()

  if (urlQuery) {
    $('#html-container').empty()
    $('#go-to-home-page').show()
    console.log(('urlstring after if statement: '+ urlQuery));
    const $url = $(`<h5 class="card-title">${urlQuery}</h5>`);
    $('.card-title').replaceWith($url);

    function loadPollToVote(urlString) {
      const url =`/api/polls/${urlString}`
      console.log(url)

      $.ajax({url: url, method: 'GET'})
        .then((response) => {
          console.log(response.polls);
          fetchPollToVote(response);
          fetchTimeSlots(response)
        });
    }

    function fetchPollToVote(object) {

      const $preVotePage = $(`<h1> POLL DETAILS IN THE VOTE PAGE</h1>
      <h5> ${object.polls[0].title}</h5>
      <h5> ${object.polls[0].description}</h5>
      <p>${object.polls[0].location}</p>
      <p>${object.polls[0].name}</p>
      <p>${object.polls[0].email}</p>
      <p>${object.polls[0].date_created}</p>

      <a id="complete-url" href = "http://localhost:8080/?${object.polls[0].url}"> http://localhost:8080/?${object.polls[0].url}</a>
       `);
      $('#html-container').append( $preVotePage)
    }


    function fetchTimeSlots(arr) {
      for (const element of arr.polls) {
        const $preVotePage = $(`<h1> TIME SLOTS DETAILS</h1>
        <h5>start_date: ${element.start_date}</h5>
        <h5>end_date: ${element.end_date}</h5>
        <h5>start_time: ${element.start_time}</h5>
        <h5>end_time: ${element.end_time}</h5>

        `);
        $('#html-container').append( $preVotePage)
      }
    }

    const urlToVote= urlQuery.slice(1);
    loadPollToVote(urlToVote)

    const obj = {name:'Wolff', token: '15t5', email: 'marwa@gmail.com', time_slot_id: 2, choice: 'true'};
    const obj2 = {name:{value:'Omar'}, token: '1444', email: {value: 'xxx@yyyl.com'}, time_slot_id: {value: 2}, choice: {value: 'true'}}


    // $.ajax({
    //   type: 'PUT',
    //   url: '/api/polls/votes',
    //   data: obj,
    //   success: function(response) {
    //     alert(response)
    //   }

    // });
    $.ajax({
      type: 'POST',
      url: '/api/polls/votes',
      data: obj2,
      success: function(response) {
        alert(response)
      }

    });






  }










  $('#go-to-home-page').on('click', function() {
    console.log( "went to landing page" );
    $('#go-to-home-page').hide()
    window.history.pushState("object or string", "Title", "/");
    $("#html-container").append(landingHTML)

  });

});


function loadPoll(urlString) {
  const url =`/api/polls/${urlString}`
  console.log(url)

  $.ajax({url: url, method: 'GET'})
    .then((response) => {
      console.log(response.polls);
      formToVote(response);
    });
}







