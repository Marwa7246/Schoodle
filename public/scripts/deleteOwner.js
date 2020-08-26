const deleteOwner = function(value) {
  console.log("value: ", value);
  $.ajax({method: 'DELETE', url: `/owners/${value}`})
    .then(alert('owner deleted!'))
    .catch(err => console.log(err))
}
