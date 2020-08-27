const deleteUser = function(token) {

  $.ajax({method: 'DELETE', url: `/users/${token}`})
    .then(alert('user deleted!'))
    .catch(err => console.log(err))
}
