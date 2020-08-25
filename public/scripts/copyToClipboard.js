// const copyToClipboard = require ('../helpers/copyToClipboard');

const copyToClipboard = function(id) {

  let copyText = $('#copy-bookie').val();
  console.log(copyText)
  let textarea = document.createElement("textarea");
  textarea.textContent = copyText;
  textarea.style.position = "fixed";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

// $(document).ready(function() {

//   $('#copy-bookie').click(function() {
//     copyToClipboard('test');
//   })

// })
