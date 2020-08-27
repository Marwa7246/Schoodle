// const copyToClipboard = require ('../helpers/copyToClipboard');

const copyToClipboard = function(id) {



  let textarea = document.createElement("textarea");
  textarea.textContent = id;
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
