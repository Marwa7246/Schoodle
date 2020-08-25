// const copyToClipboard = require ('../helpers/copyToClipboard');

const copyToClipboard = function(id) {
  console.log(id);
  let copyText = $(id).attr('value');
  let textarea = document.createElement("textarea");
  textarea.textContent = copyText;
  textarea.style.position = "fixed";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};


