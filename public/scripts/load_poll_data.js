function loadPollToVote(url, runTimeSlot) {
  const routeUrl =`/api/polls/${url}`
  console.log(routeUrl)

  $.ajax({url: routeUrl, method: 'GET'})
    .then((response) => {
      console.log('THIS RESPONSE HERE ---',response);
      fetchPollToVote(response);
      if (runTimeSlot) {
      fetchTimeSlots(response)
      } else {
        timeSlotBuilder(response)
      }
    });
}

function fetchPollToVote(object) {
console.log(object)

  const preVotePage = `
  <div id="poll-details">
  <h3> ${object.polls[0].title}</h3>
  <h4> ${object.polls[0].description}</h4>
  <h5>${object.polls[0].location}</h5>
  <h5>${object.polls[0].name}</h5>
  <h5>${object.polls[0].email}</h5>
  <h5>${object.polls[0].date_created.slice(0,10)}</h5>
  <a id="complete-url" href = "http://localhost:8080/?${object.polls[0].url}"> http://localhost:8080/?${object.polls[0].url}</a>
  </div>
  `;


   $('#bookie-info').append(preVotePage);
}


function fetchTimeSlots(arr) {
  $('#html-container').append($(`<h1> TIME SLOTS DETAILS</h1>`))
  for (const element of arr.polls) {
     finalTimes +=

    `

    <div class="poll-times">
    <h5>start_date: ${element.start_date.slice(0,10)}</h5>
    <h5>end_date: ${element.end_date.slice(0,10)}</h5>
    <h5>start_time: ${element.start_time.slice(0,8)}</h5>
    <h5>end_time: ${element.end_time.slice(0,8)}</h5>
    </div>
    `;

  }
  $('#bookie-time-slots').append( finalTimes)
}
