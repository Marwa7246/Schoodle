$(document).ready(function() {

  $('#add-timeslot').click(function(event) {

    event.preventDefault();

    const noOfRows = $('#time-slot-article div').length + 1;
    console.log(noOfRows);

    if (noOfRows < 5) {

      $('#time-slot-entry').append(function() {

        let variable = 'test';

        let timeslot =
        `<div id="time-slot-entry" class="column">
        Event starts:
        <input type="date" name="selected_date" />
        <span>
          <button type="button">📅</button>
        </span>
        <input type="time" name="selected_time" />
        <span>
          <button type="button">📅</button>
        </span>
        Event ends:
        <input type="date" name="selected_date" />
        <span>
          <button type="button">📅</button>
        </span>
        <input type="time" name="selected_time" />
        <span>
          <button type="button">📅</button>
        </span>
        </div>`;

        return timeslot
      });

    }

  })

})
