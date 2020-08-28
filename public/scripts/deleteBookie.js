const deleteBookie = function(value) {
  console.log('in delete');
  $.ajax({method: 'DELETE', url: `/api/polls/${value}`})
    .then(alert('bookie deleted!'))
    .catch(err => console.log(err))
}
