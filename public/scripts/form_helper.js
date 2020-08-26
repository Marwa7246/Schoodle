function timeSlotBuilder (times) {
  console.log("in time slots ")
let timeSlots =''
  for (const t of times) {
    timeSlots +=
  `<span>${t.name}
  <input class="vote-control" type="radio" name="${t.name}" value="${t.value}"/>
</span>`

}
return  timeSlots
}

function voteTable (votes) {
  let votesResults = ''
  for (const vote of votes) {
    votesResults +=
    `<tr>
    <td>${vote.value}</td>
  </tr>`

  }
  return votesResults;
  }

function confirmToken (token) {


}

