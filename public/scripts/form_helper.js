
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


function Usersobj(objUsers) {
  let obj = [];
  for (const element of objUsers.users) {
    let x=element.id
    if (!obj[x]){
      obj[x] ={}
    }
    if (!obj[x].name) obj[x].name=[];
    obj[x].name.push(element.user_name)
  }
  return obj
}

function voteTable (url) {
  const urlVoteUsers =`/users/${url}`

$.ajax({
  type: 'GET',
  url: urlVoteUsers})
  .then((response) => {

    renderTable(Usersobj(response))
  })

  }

function renderTable(objUsers) {
  let i =0;
  for (const key in objUsers) {
    i++
    const $votesResults = $(`


    <p>Choice ${i}: ${objUsers[key].name}</p>
    `);
    $('#vote-table-conatiner').append( $votesResults)
  }

}

function graphData (url) {
  const urlVote =`/api/polls/votes/${url}`
  $.ajax({
    type: 'GET',
    url: urlVote})
    .then((response) => {
      JSC.Chart('chart-container', buildGraph(renderArrForGraph(updateType(response.votes))))
    })

}


