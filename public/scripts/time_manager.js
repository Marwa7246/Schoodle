


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

