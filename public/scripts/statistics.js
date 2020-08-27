//Check if the url has any string after localhost:8080/
  //If search query found---> go to the vote page(make the botton appear )
  //If not---> load the landing page configuration



  console.log(('urlQuery: '+ urlQuery));

  // if (urlQuery) {
  //   $('#html-container').empty()
  //   console.log(('urlstring after if statement: '+ urlQuery));
  //   const $url = $(`<h5 class="card-title">${urlQuery}</h5>`);

  // $('.card-title').replaceWith($url);
  // }

$(document).ready(function () {
    $('#go-to-home-page').hide()

  if (urlQuery) {








    function fetchTimeSlotsVotes(arr) {
      for (const element of arr.votes) {
        const $preVotePage = $(`<h1> TIME SLOTS DETAILS</h1>
        <h5>start_date: ${new Date(element.start_date).toDateString()}</h5>
        <h5>end_date: ${new Date(element.end_date).toDateString()}</h5>
        <h5>start_time: ${element.start_time.slice(0,5)}</h5>
        <h5>end_time: ${element.end_time.slice(0,5)}</h5>
        <h5>Count: ${element.y}</h5>



        `);
        $('#html-container').append( $preVotePage)
      }
    }

    function Usersobj(objUsers) {
      let obj = [];
      for (const element of objUsers.users) {
        let x=element.id
        if (!obj[x]){
          obj[x] ={}
        }
        if (!obj[x].name)        obj[x].name=[];

        obj[x].name.push(element.user_name)


        //console.log(x, element.user_name)
      }
        console.log('x:', obj)

      return obj
    }


      function fetchUsersVotes(x) {
        const keys = Object.keys(x)
        console.log(keys)
        for (key in x){
           const names = x[key].name
          alert(names)
        }
      }

    function fetchUsersVotes(x) {
      for (const key in x) {
        const $preVotePage = $(`
        <h5>time slot id: ${key}</h5>
        <h5>name: ${x[key].name}</h5>
        `);
        $('#html-container').append( $preVotePage)
      }
    }
    const urlToVote= urlQuery.slice(1);

    // const urlVote =`/api/polls/votes/${urlToVote}`
    // $.ajax({
    //   type: 'GET',
    //   url: urlVote})
    //   .then((response) => {
    //     console.log("voting response: ", response);
    //     //fetchPollToVote(response);
    //     fetchTimeSlotsVotes(response)
    //   })

      const urlVoteUsers =`/api/users/${urlToVote}`
    $.ajax({
      type: 'GET',
      url: urlVoteUsers})
      .then((response) => {
        console.log("voting response: ", response);
        //fetchPollToVote(response);
        console.log('UsersArr: ', Usersobj(response))
        console.log('keys: ', Object.values(Usersobj(response)))
        fetchUsersVotes(Usersobj(response))
      })
  }



});










