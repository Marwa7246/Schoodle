

function updateType(arr) {
  let newArr = [];
  console.log('updateT mr T that is--', arr)
  for (let index of arr) {
    newArr.push({
      start_date: new Date(index.start_date).toDateString(),
      end_date: new Date(index.end_date).toDateString(),
      start_time: index.start_time,
      end_time: index.end_time,
      y: Number(index.y)
    });
  }
  console.log('this is updateType output: ',newArr);
  return newArr;
}


// creates objects that can be read by the graph plugin
function renderArrForGraph(arr) {
  console.log('rafg--', arr)
  for (let index of arr) {
    index.start_date = index.start_date.slice(0, 10);
    index.start_time = index.start_time.slice(0, 5);
    index.end_date = index.end_date.slice(0, 10);
    index.end_time = index.end_time.slice(0, 5);
  }
  let newArr = []
  for (let index of arr) {
    let string =
    `from ${index.start_date} - ${index.start_time} to ${index.end_date} - ${index.end_time}`;
    newArr.push({x: string, y: index.y})
  }
  console.log('this is renderArrForGraph output: ',newArr);
  return newArr;
}

// creates the graph using the array worked above
function buildGraph(arr) {

  console.log('arr before creating graph: ', arr)
  const arg2 = {
    type: 'column',
    series: [{ points: arr }]
  };
  console.log('arg2', arg2)
  return arg2;
}



