
//Function to generate a random string depending on the length of the string. Will be used with length =4 for the token, and length=32 for the url
const generateRandomString= function(length) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

const generateRandomUrl= function(length) {
  return 'http://localhost:8080/bookies/'+generateRandomString(length);
};

const url = generateRandomUrl(32);
const token = generateRandomString(4);



//Check if the url has any string after localhost:8080/
//If search query found---> go to the vote page(make the botton appear )
//If not---> load the landing page configuration
$(document).ready(() => {



  $('#go-to-home-page').hide(0);
  const urlString = window.location.pathname.slice(1);
  console.log(('urlstring: '+ urlString));

  if (urlString) {
    console.log(('urlstring after if statement: '+ urlString));
    const $url = $(`<h5 class="card-title">${urlString}</h5>`);


  $('.card-title').replaceWith($url);
    $('#go-to-home-page').show();
  }


  $('#go-to-home-page').on('click', function() {
    console.log( "went to landing page" );
    $('#go-to-home-page').hide()
    window.history.pushState("object or string", "Title", "/");

  });

});
