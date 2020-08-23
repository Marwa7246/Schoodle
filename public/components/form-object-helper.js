

  const timeslots = function(time_slots) {
    const timeArr = [];
    for (const set of time_slots)
     timeArr.push({
    poll_id: set.poll_id,
    start_date: set.start_date,
    start_time: set.start_time,
    end_date: set.end_date,
    end_time: set.end_time
  })
 return timeArr
}

const objectHelper = function(description, location, owner_id, date_created, url, times) {

  const bookieData = {
    description,
    location,
    owner_id,
    date_created,
    url,
    time_slots: timeslots(times)

  }


console.log(bookieData)
}
const timeS = [{ poll_id: 1,
  start_date: 'start',
  start_time: 2,
  end_date: 'end',
  end_time: 3
}, { poll_id: 1,
  start_date: 'start',
  start_time: 2,
  end_date: 'end',
  end_time: 3
}]

objectHelper('desc', 'loc', 5, 323-34, 'wewdsf', timeS)


