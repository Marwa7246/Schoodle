import { url, token } from './helper_url.js';

$(document).ready(() => {
  $('#form-content').hide();
  $('#create-bookie').on('click', landingToForm);
});
function landingToForm() {

    $('#render-form-page-container').hide();
    $('#form-content').show();

  }

  console.log('url: ', url, 'token: '+ token);


// $(document).ready(function() {


//   $('#create-bookie').on('click', '#render-form-page-container', function(event) {

//       $('#render-form-page-container').hide(0);

//   });


    // $.ajax({ url: '/render-form/', method: 'GET', dataType: 'JSON' })
    //   .then(function(response) {
    //     $('#render-form-page-container').slideup();

    //       // $('#tweet-container').prepend(createTweetElement(obj));

    //   });



//   router.post('/properties', (req, res) => {
//     //const userId = req.session.userId;
//     database.addProperty({...req.body})
//       .then(property => {
//         res.send(property);
//       })
//       .catch(e => {
//         console.error(e);
//         res.send(e)
//       });
//   });

//   return router;
//








