function loadPollToVote(url, runTimeSlot) {
  const routeUrl =`/api/polls/${url}`

  $.ajax({url: routeUrl, method: 'GET'})
    .then((response) => {
      fetchPollToVote(response);
      if (runTimeSlot) {
      fetchTimeSlots(response)
      } else {
        timeSlotBuilder(response)
      }
    });
}

function fetchPollToVote(object) {

  const preVotePage = `
  <div id="poll-details">
  <h3>Bookie title: ${object.polls[0].title}</h3>
  <h4>Description: ${object.polls[0].description}</h4>
  <h5>Location: ${object.polls[0].location}</h5>
  <h5>Bookie owner: ${object.polls[0].name}</h5>
  <h5>Owner email: ${object.polls[0].email}</h5>
  <h5>Created: ${object.polls[0].date_created.slice(0,10)}</h5>
  <a id="complete-url" href = "http://localhost:8080/?${object.polls[0].url}"> http://localhost:8080/?${object.polls[0].url}</a>
  </div>
  `;


   $('#bookie-info').append(preVotePage);
}


function fetchTimeSlots(arr) {
  let finalTimes = ``;
  for (const element of arr.polls) {
    if (element) {
     finalTimes +=
    `
    <div class="poll-times">
    <h5>From: ${element.start_date.slice(0,10)}, ${element.start_time.slice(0,8)}<br>to: ${element.end_date.slice(0,10)}, ${element.end_time.slice(0,8)}</h5>
    </div>
    `;
    }
  }
  $('#bookie-time-slots').append(finalTimes);
}
