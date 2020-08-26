function timeSlotBuilder (times) {
  console.log("in time slots ")
let timeSlots =''
let choiceNum = 0
  for (const t of times) {
    timeSlots +=

  `<span>${t.name}
  <input class="vote-choices" type="checkbox" name="choice-${choiceNum += 1 }" value="${t.time_slot_id}"/>
</span>`

}
return  timeSlots
}

function voteTable (votes) {
  let votesResults = ''
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

