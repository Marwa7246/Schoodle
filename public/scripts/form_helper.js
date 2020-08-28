



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
    console.log('x:', obj)
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
  let colName = 1;
  console.log('MARIO',objUsers)
  for (const key in objUsers) {
    const $votesResults = $(`
    <tr>
    <td>time slot  ${colName}<td>
    <td>${objUsers[key].name}<td>
    </tr>`);
    $('#vote-table-conatiner').append( $votesResults)
    colName++
  }

}
  // function renderTable(votes) {
  //   let votesResults = ''
  // console.log('votes:', votes)
  // if(votes.length = 0) {
  //   return console.log('array is empty cant render')
  // }
  // for (const key in votes) {
  //   const $votesResults = $(`
  //   <tr>
  //   <td>time slot id: ${key}</td>
  //   <td>name: ${votes[key].name}</td>
  //   </p></tr>`);
  // }


  // for (const vote of votes.votes) {
  //   console.log(vote)
  //   votesResults +=
  //   `<tr>
  //   <td>${vote.start_date}</td>

  //   <td>${vote.start_time}</td>
  //   </p>

  // </tr>`

  // }
  // return votesResults;
  // }

function graphData (url) {
  const urlVote =`/api/polls/votes/${url}`
  $.ajax({
    type: 'GET',
    url: urlVote})
    .then((response) => {
      console.log("voting response: ", response.votes);
      JSC.Chart('#chart-container', buildGraph(renderArrForGraph(updateType(response.votes))))
    })

}


