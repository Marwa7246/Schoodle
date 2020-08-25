function timeSlotBuilder (times) {
for (const t in times) {
  $("#display-time-slot-container").append(function () {
  `<span>${t.name}
  <input class="form-check-input" type="radio" name="${t}"/>
</span>`
  })
}
}
