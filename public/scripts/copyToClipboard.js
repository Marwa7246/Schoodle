// const copyToClipboard = require ('../helpers/copyToClipboard');

const copyToClipboard = function(id) {

  const copyText = document.getElementById('copy-bookie');

  copyText.select(); // Desktop
  copyText.setSelectionRange(0, 99999); // Mobile

  document.execCommand("copy");

};


