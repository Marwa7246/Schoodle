const deleteUser = function(value) {
  console.log("value: ", value);
  $.ajax({method: 'DELETE', url: `/users/${value}`})
    .then(alert('user deleted!'))
    .catch(err => console.log(err))
}
