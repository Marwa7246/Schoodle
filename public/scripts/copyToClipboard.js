// const copyToClipboard = require ('../helpers/copyToClipboard');

const copyToClipboard = function(id) {

  const copyText = document.getElementById(id);

  copyText.select(); // Desktop
  copyText.setSelectionRange(0, 99999); // Mobile

  document.execCommand("copy");

};

$(document).ready(function() {

  $('#button').click(function() {
    copyToClipboard('test');
  })

})
