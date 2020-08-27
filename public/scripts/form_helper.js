function getUrlData (url, vote) {

  const routeUrl =`/api/polls/${url.slice(1,)}`
  $.ajax({url: routeUrl, method: 'GET'})
    .then((response) => {
      if (vote) {
        $('#vote-table-conatiner').append(voteTable(response))
      } else {
        $('#time-slot-container').append(timeSlotBuilder(response))
      }
    });

  }

function timeSlotBuilder (times) {
  console.log("in time slots ")
let timeSlots =''
let choiceNum = 0
for (const t of times.polls) {
  console.log('times------', timeSlots)
    timeSlots +=
  `<span>Start Date - ${t.start_date.slice(0,10)}, End Date - ${t.end_date.slice(0,10)}, Start Time - ${t.start_time.slice(0,8)}, End Time - ${t.end_time.slice(0,8)}
  <input class="vote-choices" type="checkbox" name="choice-${choiceNum += 1 }" value="${t.time_slot_id}"/>
</span>`

}
return  timeSlots
}

function voteTable (url) {

  let votesResults = ''
  const urlVote =`/api/polls/votes/${url}`
  $.ajax({
    type: 'GET',
    url: urlVote})
    .then((response) => {
      console.log(response);
      renderTable(response)

    })

  }
function renderTable(votes) {
  if(votes.length = 0) {
    return console.log('array is empty cant render')
  }
  for (const vote of votes) {
    votesResults +=
    `<tr>
    <td>${vote.time_slot_id}</td>
    <td>${vote.time_slot_id}</td>
    <td>${vote.time_slot_id}</td>

  </tr>`

  }
  return votesResults;
  }

function confirmToken (token) {


}

