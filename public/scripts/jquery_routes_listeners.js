const fakeTimes = [{name: "monday 2pm -3pm", time_slot_id: 1}, {name: "monday 2pm -3pm", time_slot_id: 3}, {name: "monday 2pm -3pm", time_slot_id: 2}]

const urlQuery = window.location.search;

const urlToVote= urlQuery.slice(1);


$(document).ready(function () {

  console.log("connected");

  if (urlQuery) {
    $('#html-container').empty()
    postFormToVote()
    // console.log(('urlstring after if statement: '+ urlQuery));
    // const $url = $(`<h5 class="card-title">${urlQuery}</h5>`);
    // $('.card-title').replaceWith($url);
  } else {
    $("#html-container").append(landingHTML);
    $("#create-bookie").on("click", function () {
    landingToForm();
    })
  }


  function deleteBookie(value) {
    console.log("in delete");
    $.ajax({ method: "DELETE", url: `/api/polls/${value}` })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  }





  function landingToForm() {
    $("#create-bookie").off();
    $("#html-container").empty();

    $("#html-container").append(formPage);
    $("#add-timeslot").on('click', function () {
       timeManager()
      });

    $("#form-submission").submit(function (event) {
      event.preventDefault();
      const bookieObject = bookieObjectBuilder(event, '.form-control', '.time-slot')
      $.ajax({
        type: "POST",
        url: "/api/polls",
        data: bookieObject,
        success: function (response) {
          console.log("The happy", response);
          $("#html-container").empty();
          $("#add-timeslot").off();
          $("#main-form-button").off();
          $("#create-bookie").off();

          formToPostForm(response, bookieObject);
        },
      });
    });
  }

  function formToPostForm(res, obj) {
    const deleteId = res.rows[0].id
    const copyText = 'http://localhost:8080/?' + obj.url;

    loadPollToVote(obj.url, true)

    $("#html-container").append(preVotePage);
    $("#delete-bookie").on("click", function () {
      console.log('id----', deleteId, 'url----', copyText);
      deleteBookie(deleteId);
    });
    // still problems with the button
    $("#copy-bookie").click(function () {
      copyToClipboard(copyText);
    });
    $("#link-tag").click(function (e) {
      postFormToVote(obj)
    });
  }

  function postFormToVote(obj) {
    $("#html-container").empty();
    $("#copy-bookie").off();
    $("#delete-bookie").off();
    $("#link-tag").off();
    $("#html-container").append(votesPage)
    $('#time-slot-container').append(getUrlData(urlQuery))




    $("#vote-form").submit( function (event) {
      const voteData = bookieObjectBuilder(event, ".vote-control", ".vote-choices")
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "/api/polls/votes",
        data: voteData,
        success: function (response) {
          console.log(response)
          $("#html-container").empty();
        voteToResult(voteData);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Your vote didnt work try again");
          voteToResult(voteData);
        }
      })
    })
  }

  function voteToResult(voteData) {

    $("#html-container").empty();
    $("#vote-form").off();
    $("#html-container").append(resultsPage)
    $('#user-token').append(voteData.token)
    // append token in here using voteData.token
    $("#vote-table-conatiner").append(voteTable(urlToVote))
    $("#token-check").submit( function (event) {
      event.preventDefault()
      $('#revote-container').append(formPopOut)
      $("#time-slot-container").append(getUrlData(urlToVote))
      $("#append-vote-button").off()
    })
    $("#append-vote-form").submit( function (event) {
      event.preventDefault();
      $.ajax({
        type: "PUT",
        url: "/api/votes",
        data: bookieObjectBuilder(event, ".vote-control", ".vote-choices"),
        success: function (response) {

          console.log(response)
          $("#re-vote-form").off()
          $("#html-container").empty();
          $("#html-container").append(resultsPage)
        voteToResult();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {

          console.log(errorThrown)
          alert("You re-vote didnt work try again");


       }
    })
    })
  }



});


// $('#delete-owner').on('click', function() {
//   deleteUser('15t5');
// })
