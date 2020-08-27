//Check if the url has any string after localhost:8080/
  //If search query found---> go to the vote page(make the botton appear )
  //If not---> load the landing page configuration


  // const urlQuery = window.location.search;

  // console.log(('urlQuery: '+ urlQuery));


$(document).ready(function () {

  // if (urlQuery) {
  //   $('#html-container').empty()
  //   $('#go-to-home-page').show()
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

      // $.ajax({url: url, method: 'GET'})
      //   .then((response) => {
      //     fetchPollToVote(response);
      //     fetchTimeSlots(response)
      //   });
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
        $('#html-container').append($preVotePage)
      }
      const $graph = $(`
      <div id="chartDiv" style="width:50%; height:300px; margin:0 auto;"></div>
      `);
      $('#html-container').append($graph)
      console.log('logging arr: ',arr);
      console.log('done with appending graph')
      // JSC.Chart('chartDiv', buildGraph(renderArrForGraph(updateType(arr.polls))));
    }

    const urlToVote= urlQuery.slice(1);
    loadPollToVote(urlToVote)

    const obj =   {  name: { name: 'name', value: 'nnnn' },
    email: { name: 'email', value: '' },
    time_slots:
     { '1-choice': { name: 'choice', time_slot_id: '1' },
       '2-choice': { name: 'choice', time_slot_id: '2' },
       '3-choice': { name: 'choice', time_slot_id: '3' }},
    token: 'dCMJ' }



const obj2 =   {  name: { name: 'name', value: 'aaa' },
                  email: { name: 'email', value: '' },
                  time_slots:
                   { '1-choice': { name: 'choice', time_slot_id: '1' },
                     '2-choice': { name: 'choice', time_slot_id: '2' },
                     '3-choice': { name: 'choice', time_slot_id: '3' }},
                  token: 'dCMJ' }


    // $.ajax({
    //   type: 'PUT',
    //   url: '/api/polls/votes',
    //   data: obj,
    //   success: function(response) {
    //     alert(response)
    //   }

    // });

    // $.ajax({
    //   type: 'POST',
    //   url: '/api/polls/votes',
    //   data: obj2,
    //   success: function(response) {
    //     console.log(response)
    //   }

    // });

    const urlVote =`/api/polls/votes/${urlToVote}`
    $.ajax({
      type: 'GET',
      url: urlVote})
      .then((response) => {
        console.log("this is response", response);
        JSC.Chart('chartDiv', buildGraph(renderArrForGraph(updateType(response.votes))));
        //fetchPollToVote(response);
        //fetchTimeSlots(response)
      })

  }

  $('#go-to-home-page').on('click', function() {
    console.log( "went to landing page" );
    $('#go-to-home-page').hide()
    window.history.pushState("object or string", "Title", "/");
    $("#html-container").append(landingHTML)

  });

});


// function loadPoll(urlString) {
//   const url =`/api/polls/${urlString}`
//   console.log(url)

//   $.ajax({url: url, method: 'GET'})
//     .then((response) => {
//       console.log(response.polls);
//       formToVote(response);
//     });
// }







