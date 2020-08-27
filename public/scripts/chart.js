
// const arrayReturned = [
//   [  {
//     start_date: '2020-09-11T00:00:00.000Z',
//     start_time: '18:00:00',
//     end_date: '2020-09-27T00:00:00.000Z',
//     end_time: '19:00:00',
//     y: 11 },
//    {
//     start_date: '2020-09-11T00:00:00.000Z',
//     start_time: '08:00:00',
//     end_date: '2020-09-27T00:00:00.000Z',
//     end_time: '12:00:00',
//     y: 12 },
//    {
//     start_date: '2021-10-01T00:00:00.000Z',
//     start_time: '10:00:00',
//     end_date: '2021-10-14T00:00:00.000Z',
//     end_time: '14:00:00',
//     y: 13 } ]
//    ]

// updates string date from date type to string type
function updateType(arr) {
  let newArr = [];
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
    type: 'horizontal column',
    series: [{ points: arr }]
  };
  return arg2;
}

// JSC.Chart('chartDiv', buildGraph(renderArrForGraph(arrayReturned)));
