

  function bookieObjectBuilder(event, target1, target2) {
    event.preventDefault();

    let bookieData = $(event.target).find(target1).serializeArray();

    console.log(bookieData);
    const arrayToObjectBookie = (array, keyField) =>
      array.reduce((obj, item) => {
        obj[item[keyField]] = item;
        return obj;
      }, {});
if(target2) {
    let timeSlots = $(event.target).find(target2).serializeArray();
    const arrayToObjectTime = (array, keyField1, key2) =>
      array.reduce((obj, item) => {
        obj[item[keyField1] + "-" + item[key2]] = item;
        return obj;
      }, {});

    bookieData = arrayToObjectBookie(bookieData, "name");
if(timeSlots.length != 0) {
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
  }
    console.log(bookieData);
    bookieData.url = generateRandomUrl(32);
  }
    bookieData.token = generateRandomString(4);
    bookieURL = bookieData.url;
    return bookieData;
  }
