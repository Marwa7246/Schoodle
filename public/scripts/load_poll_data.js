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

  const preVotePage = `<h1> POLL DETAILS IN THE VOTE PAGE</h1>
  <h5> ${object.polls[0].title}</h5>
  <h5> ${object.polls[0].description}</h5>
  <p>${object.polls[0].location}</p>
  <p>${object.polls[0].name}</p>
  <p>${object.polls[0].email}</p>
  <p>${object.polls[0].date_created}</p>
  <a id="complete-url" href = "http://localhost:8080/?${object.polls[0].url}"> http://localhost:8080/?${object.polls[0].url}</a>
   `;


   $('#bookie-info').append(preVotePage);
}



function fetchTimeSlots(arr) {
  let finalTimes = ""
  for (const element of arr.polls) {
     finalTimes +=
    `<h1> TIME SLOTS DETAILS</h1>
    <h5>start_date: ${element.start_date}</h5>
    <h5>end_date: ${element.end_date}</h5>
    <h5>start_time: ${element.start_time}</h5>
    <h5>end_time: ${element.end_time}</h5>

    `;

    $('#html-container').append( finalTimes)
  }
}
