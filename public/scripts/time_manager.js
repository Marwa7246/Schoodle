


  const timeManager = function () {
    event.preventDefault();

    const noOfRows = $("#time-slot-container div").length + 1;
    if (noOfRows < 5) {
      $("#time-slot-container").append(function () {
        let timeslot = `
        <div class="d-flex justify-content-center time-elements">
        <span>Event starts:</span>
        <input class="time-slot" type="date" name="start_date" />
        <input class="time-slot" type="time" name="start_time" />
        </div>
        <div class="d-flex justify-content-center time-elements">
        <span>Event ends:</span>
        <input class="time-slot" type="date" name="end_date" />
        <input class="time-slot" type="time" name="end_time" />
      </div>
      `;

        return timeslot;
      });
    }
  };

