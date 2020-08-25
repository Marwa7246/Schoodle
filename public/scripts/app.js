$(document).ready(function () {
  $("#html-container").append(landingHTML);

  function deleteBookie(value) {
    console.log("in delete");
    $.ajax({ method: "DELETE", url: `/api/polls/${value}` })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  console.log("connected");

  $("#create-bookie").on("click", landingToForm);

  function landingToForm() {
    $("#create-bookie").off();
    $("#html-container").empty();

    $("#html-container").append(formPage);
    $("#add-timeslot").click(timeManager);

    $("#form-submission").submit(function (event) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "/api/polls",
        data: bookieObjectBuilder(event),
        success: function (response) {
          console.log("The happy", response);
          $("#html-container").empty();
          $("#add-timeslot").off();
          $("#main-form-button").off();
          $("#create-bookie").off();
          formToPostForm(response.rows[0].id);
        },
      });
    });
  }

  function formToPostForm(id) {
    console.log(id);
    $.ajax({ url: `/api/polls/${id}`, method: "GET" }).then((response) => {
      console.log("req sent", response);
      $("#html-container").append(`<h5> ${response.polls[0].title}</h5>
         <h5> ${response.polls[0].description}</h5>
         <p>${response[0].location}</p>`);
    });
    $("#html-container").append(preVotePage);
    $("#delete-bookie").on("click", function () {
      deleteBookie(1);
    });
    // still problems with the button
    $("#copy-bookie").click(function (e) {
      // e.preventDefault();
      copyToClipboard();
    });
    $("#link-tag").click(function (e) {
      postFormToVote()
    });
  }

  function postFormToVote() {
    $("#html-container").empty();
    $("#copy-bookie").off();
    $("#delete-bookie").off();
    $("#link-tag").off();
    $("#html-container").append(votesPage)
    $("#vote-button").on('click', function (event) {
      event.preventDefault();
      // ajax request here to post from vote
      voteToResult();
    })
  }

  function voteToResult() {
    $("#html-container").empty();
    $("#vote-button").off();
    $("#html-container").append(resultsPage)
    $("#append-vote-button").on('click', function (event) {
      $('#revote-container').append(formPopOut)
    })
    $("#revote-button").on('click', function () {
      // ajax request here to post from vote

    })

  }


  function bookieObjectBuilder(event) {
    event.preventDefault();

    let bookieData = $(event.target).find(".form-control").serializeArray();
    let timeSlots = $(event.target).find(".time-slot").serializeArray();
    console.log(bookieData, timeSlots);
    const arrayToObjectBookie = (array, keyField) =>
      array.reduce((obj, item) => {
        obj[item[keyField]] = item;
        return obj;
      }, {});

    const arrayToObjectTime = (array, keyField1, key2) =>
      array.reduce((obj, item) => {
        obj[item[keyField1] + "-" + item[key2]] = item;
        return obj;
      }, {});

    bookieData = arrayToObjectBookie(bookieData, "name");

    for (let i = 0; i < timeSlots.length; i++) {
      if (i < 4) {
        timeSlots[i].time_slot_id = 1;
      } else if (i > 3 && i <= 7) {
        timeSlots[i].time_slot_id = 2;
      } else if (i > 7 && i < 12) {
        timeSlots[i].time_slot_id = 3;
      } else {
        timeSlots[i].time_slot_id = 4;
      }
    }
    timeSlots = arrayToObjectTime(timeSlots, "time_slot_id", "name");
    bookieData.time_slots = timeSlots;
    console.log(bookieData);
    bookieData.url = generateRandomUrl(32);
    bookieData.token = generateRandomString(4);
    bookieURL = bookieData.url;
    return bookieData;
  }

  const timeManager = function () {
    event.preventDefault();

    const noOfRows = $("#time-slot-container div").length + 1;
    console.log(noOfRows);

    if (noOfRows < 5) {
      $("#time-slot-container").append(function () {
        let timeslot = `  <article id="time-slot-container">
        <div class="row">
          Event starts:
          <input class="time-slot" type="date" name="start_date" />
          <span>
          </span>
          <input class="time-slot" type="time" name="start_time" />
          <span>
          </span>
          Event ends:
          <input class="time-slot" type="date" name="end_date" />
          <span>
          </span>
          <input class="time-slot" type="time" name="end_time" />
          <span>
        </div>
      </article>`;

        return timeslot;
      });
    }
  };
});

//Check if the url has any string after localhost:8080/
//If search query found---> go to the vote page(make the botton appear )
//If not---> load the landing page configuration
// $('#go-to-home-page').hide(0);
// const urlString = window.location.pathname.slice(1);
// console.log(('urlstring: '+ urlString));

// if (urlString) {
//   console.log(('urlstring after if statement: '+ urlString));
//   const $url = $(`<h5 class="card-title">${urlString}</h5>`);

// $('.card-title').replaceWith($url);
// $('#go-to-home-page').show();
// }

// $('#go-to-home-page').on('click', function() {
//   console.log( "went to landing page" );
//   $('#go-to-home-page').hide()
//   window.history.pushState("object or string", "Title", "/");

// });

{
  /* <input id='bookie-link' value='testing link'></input> */
}
