const deleteBookie = function(value) {
  console.log('in delete');
  console.log(value);
  $.ajax({method: 'DELETE', url: `/api/polls/${value}`})
    .then(alert('bookie deleted!'))
    .catch(err => console.log(err))
}
