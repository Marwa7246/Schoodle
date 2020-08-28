const formPage = `
<section id='bookie-form-page' class="d-flex-column justify-content-around">
<div class="d-flex-column justify-content-around" id="form-logo">
  <img
    src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/544/3576556544_5895c6d6-8741-40d3-9a7a-0ce2774fa4bf.png?cb=1598060511">
</div>

<h2>ENTER YOUR DETAILS AND WE WILL PROVIDE YOU WITH A LINK FOR YOUR BOOKIE POLL</h2>
    <form id="form-submission">
      <article class="form-content col-xs-12 col-lg-12">
          <div class="form-group">
            <h6>Full name</h6>
            <input type="text" class="form-control" name="name"
              placeholder="Enter your name">
          </div>
          <div class="form-group">
            <h6>E-mail</h6>
            <input id="email" type="email" class="form-control" placeholder="E-mail address" name="email">
          </div>
          <div class="form-group">
            <h6>Bookie title</h6>
            <input id="title" type="text" class="form-control" name="title"
              placeholder="Add your bookie title">
          </div>
          <div class="form-group">
            <h6>Bookie description</h6>
            <input id="description" type="text" class="form-control" name="description"
              placeholder="Briefly describe the bookie you're planning">
          </div>
          <div class="form-group">
            <h6>Location</h6>
            <input id="location" type="text" class="form-control" name="location"
              placeholder="Where is it going to happen?">
          </div>
        <div id="time-slot-container" class="col-xs-10 col-lg-10">
          <div class="d-flex justify-content-center time-elements">
            <span>Event starts:</span>
            <input class="time-slot" type="date" name="start_date" />
            <input class="time-slot" type="time" name="start_time" />
            <span>Event ends:</span>
            <input class="time-slot" type="date" name="end_date" />
            <input class="time-slot" type="time" name="end_time" />

          </div>
        </div>
      <div>
      <button id="add-timeslot" type="button" class="btn btn-primary">Add entry</button>
      <button id="main-form-button" type="submit" class="btn btn-primary">Submit</button>
      </div>
      </article>
      </form>
  </section>
`;



const landingHTML = `<div class="grid d-flex justify-content-center">
<div class='column'>
<div class="row col-xs-12">
  <img style="margin-top: 10rem; min-width: 20rem;"
    src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/544/3576556544_5895c6d6-8741-40d3-9a7a-0ce2774fa4bf.png?cb=1598060511">
</div>
</div>
</div>
<h1 style="text-align: center; margin-top: 1rem;">The New Way to Meet!</h1>
<div class="grid d-flex justify-content-center">
<div class='column'>
<div class="row col-sm-12">
  <button id="create-bookie" style="margin-top: 2rem; background: none; border: none;" type="" name="make-bookie"
    value="">
    <img
      src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/809/3576559809_ced2e008-9de3-42c9-9468-a0d63ecbb98a.png?cb=1598560144" />
  </button>
</div>
</div>`;

const preVotePage = `
<div class="justify-content-center">
  <img id="post-form-logo"
    src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/544/3576556544_5895c6d6-8741-40d3-9a7a-0ce2774fa4bf.png?cb=1598060511">
<h1> These are the details from your bookie </h1>
  <div id="bookie-info">
</div>
<div id="bookie-time-slot-container">
<h3> TIME SLOTS DETAILS</h3>
<div id="bookie-time-slots">
</div>
</div>
<div id="button-container">
  <button id='delete-bookie' type='button' class='btn btn-danger'>delete</button>
  <button id='copy-bookie' type='button' class='btn btn-info'>copy</button>
  </div>
  </div>
  `;

{
  /* <div class="form-check-input" id="display-time-slot-container">
    </div> */
}

const votesPage = `<div id="vote-page" class="justify-content-center">
<div class="column col-xs-12">
  <img id="vote-logo"

    src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/544/3576556544_5895c6d6-8741-40d3-9a7a-0ce2774fa4bf.png?cb=1598060511"
  />
</div>
<h1>Its Bookie Time!!!</h1>






<form id="vote-form" class="row col-xs-12 justify-content-center">
  <div>
    <input placeholder="Your Name" type="text" class="vote-control" name="name" />
    <input placeholder="Your Email" type="email" name="email" class="vote-control"/>
    <button class="btn btn-info">VOTE</button>
    </div>
    <div class="time-slot-container">
    </div>
  </form type="submit">


<p>
  Please enter your name and email, along with your availabilities.
</p>
</div>
`;

const resultsPage = `
<div id="results-page" class="col-xs-12">
    <img
      id="results-logo";"
      src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/544/3576556544_5895c6d6-8741-40d3-9a7a-0ce2774fa4bf.png?cb=1598060511"
    />
  <h1>The results so far!</h1>
  <h1>If you wish to change your vote here is your code <a id="user-token"></h1>

  <button type="button" id="token-button" class="btn btn-info">SUBMIT</button>
  <div id>
  <form id="append-vote-form" action="">
  <div id="revote-container">
  </div>
<div id="chart-container" class="row col-xs-12 justify-content-center">
</div>
<ul id="vote-table-conatiner">
</ul>


  </form>
  </div>
</div>
`;


const formPopOut = `
<div id="form-pop-out">
<input type="text" name="user-token" placeholder="Token">
<input placeholder="Your Name" type="text" class="vote-control" name="name" />
<input placeholder="Your Email" type="email" name="email" class="vote-control"/>


<div class="time-slot-container">
</div>
<button id="re-vote-button" type="submit" class="btn btn-info">VOTE</button>
</div>
<button id="delete-user" type="submit" class="btn btn-danger">DELETE YOUR VOTES</button>
`;
{
  /* <div class="form-check-input" id="display-time-slot-container">
</div> */
}
