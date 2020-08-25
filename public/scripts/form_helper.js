function timeSlotBuilder (times) {
for (const t in times) {
  $("#display-time-slot-container").append(function () {
  `<span>${t.name}
  <input class="form-check-input" type="radio" name="${t}"/>
</span>`
  })
}
}

function voteTable (votes) {
  for (const vote in votes) {
    $("#vote-table-conatiner").append(function () {
    `<tr>
    <td>${vote}</td>
  </tr>`
    })
  }
  }

function confirmToken (token) {


}

