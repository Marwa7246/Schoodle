// const copyToClipboard = require ('../helpers/copyToClipboard');

const copyToClipboard = function(txt) {
console.log('in copy')
  const copyText = document.getElementById('copy-bookie');

  copyText.select(); // Desktop
  copyText.setSelectionRange(0, 99999); // Mobile

  document.execCommand("copy");

};

// $(document).ready(function() {

//   $('#copy-bookie').click(function() {
//     copyToClipboard('test');
//   })

// })
