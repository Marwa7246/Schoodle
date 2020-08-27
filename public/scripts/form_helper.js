

function getUrlData (url, vote) {

  const routeUrl =`/api/polls/${url.slice(1,)}`
  $.ajax({url: routeUrl, method: 'GET'})
    .then((response) => {

        $('.time-slot-container').append(timeSlotBuilder(response))

    });

  }

function timeSlotBuilder (times) {
  console.log("in time slots ")
let timeSlots =''
let choiceNum = 0
for (const t of times.polls) {

    timeSlots +=
  `<span>Start Date - ${t.start_date.slice(0,10)}, End Date - ${t.end_date.slice(0,10)}, Start Time - ${t.start_time.slice(0,8)}, End Time - ${t.end_time.slice(0,8)}
  <input class="vote-choices" type="checkbox" name="choice-${choiceNum += 1 }" value="${t.time_slot_id}"/>
</span>`

}
return  timeSlots
}

function voteTable (url) {
  const urlVoteUsers =`/users/${url}`



$.ajax({
  type: 'GET',
  url: urlVoteUsers})
  .then((response) => {
    console.log('vote-users', response)
    renderTable(response.votes)

  })


  }
  function renderTable(votes) {
    let votesResults = ''
  console.log(votes)
  if(votes.length = 0) {
    return console.log('array is empty cant render')
  }
  for (const vote of votes.votes) {
    console.log(vote)
    votesResults +=
    `<tr>
    <td>${vote.start_date}</td>

    <td>${vote.start_time}</td>
    </p>

  </tr>`

  }
  return votesResults;
  }

function graphData (url) {
  const urlVote =`/api/polls/votes/${url}`
  $.ajax({
    type: 'GET',
    url: urlVote})
    .then((response) => {
      console.log("voting response: ", response.votes);
      JSC.Chart('chartDiv', buildGraph(renderArrForGraph(updateType(response.votes))))
    })

}


