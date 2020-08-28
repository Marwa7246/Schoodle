



function getUrlData (url, vote) {
      let data;
  const routeUrl =`/api/polls/${url.slice(1,)}`
  $.ajax({url: routeUrl, method: 'GET'})
    .then((response) => {
    data = response
        $('.time-slot-container').append(timeSlotBuilder(response))

      });


  }

function timeSlotBuilder (times) {
  console.log("in time slots ")
let timeSlots =''
let choiceNum = 0
for (const t of times.polls) {

    timeSlots +=
  `
  <div>
  <label>Start Date - ${t.start_date.slice(0,10)}, End Date - ${t.end_date.slice(0,10)}, Start Time - ${t.start_time.slice(0,8)}, End Time - ${t.end_time.slice(0,8)} </label>
  <input class="vote-choices custom-checkbox" type="checkbox" name="choice-${choiceNum += 1 }" value="${t.id}"/>
</div>
`


}
return  timeSlots
}

function voteTable (url) {
  const urlVoteUsers =`/users/${url}`

$.ajax({
  type: 'GET',
  url: urlVoteUsers})
  .then((response) => {
    console.log('vote-users_______________', response)
    renderTable(response)

  })

  }
  function renderTable(votes) {
    let votesResults = ''
  console.log('vote results____________________________', votes)

  for (const vote in votes.users) {

    votesResults +=
    `<tr>
    <td>${vote.user_name}Happy</td>
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


