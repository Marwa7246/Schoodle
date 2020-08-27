
const formPage = `
<section id='bookie-form-page' style="justify-content: center;">
    <h2 style="text-align: center; margin-top: 1rem; margin-right: 6rem; margin-left: 6rem;">ENTER YOUR DETAILS AND WE
      WILL PROVIDE YOU WITH A LINK FOR YOUR BOOKIE POLL</h2>
    <form id="form-submission">
      <article class="form-content">
          <div class="form-group">
            <label for="InputName">Full name</label>
            <input type="text" class="form-control" name="name"
              placeholder="Enter your name">
          </div>
          <div class="form-group">
            <label for="InputEmail">E-mail</label>
            <input id="email" type="email" class="form-control" placeholder="E-mail address" name="email">
          </div>
          <div class="form-group">
            <label for="InputTitle">Bookie title</label>
            <input id="title" type="text" class="form-control" name="title"
              placeholder="Add your bookie title">
          </div>
          <div class="form-group">
            <label for="InputDesc">Bookie description</label>
            <input id="description" type="text" class="form-control" name="description"
              placeholder="Briefly describe the bookie you're planning">
          </div>
          <div class="form-group">
            <label for="InputLocation">Location</label>
            <input id="location" type="text" class="form-control" name="location"
              placeholder="Where is it going to happen?">
          </div>
      </article>
      <article id="time-slot-container">
        <div class="d-flex justify-content-center">
          Event starts:
          <input class="time-slot" type="date" name="start_date" />
          <span>
          </span>
          <input class="time-slot" type="time" name="start_time" />
          <span>
          </span>
          Event ends:
          <input class="time-slot" type="date" name="end_date" />
          <span>
          </span>
          <input class="time-slot" type="time" name="end_time" />
          <span>
          </span>
          <button id="add-timeslot" type="button" class="btn btn-primary">Add entry</button>
        </div>
      </article>
      <div class="d-flex justify-content-center">
      <button id="main-form-button" type="submit" class="btn btn-primary">Submit</button>
      </div>
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
      src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/809/3576559809_ced2e008-9de3-42c9-9468-a0d63ecbb98a.png?cb=1598058350" />
  </button>
</div>
</div>`


const preVotePage = `
<div class="justify-content-center">
<div class="row col-xs-12">
  <img style="margin-top: 10rem; min-width: 20rem;"
    src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/544/3576556544_5895c6d6-8741-40d3-9a7a-0ce2774fa4bf.png?cb=1598060511">
</div>
<h1> These are the details from your bookie </h1>
  <div id="bookie-info">
</div>
<div id="bookie-time-slots">
</div>

  <button id='delete-bookie' type='button' class=''>delete</button>
  <button id='copy-bookie' type='button' class=''>copy</button>
  </div>
  `;

const votesPage = `<div id="vote-page" class="justify-content-center">
<div class="row col-xs-12">
  <img
    style="margin-top: 10rem; min-width: 20rem;"
    src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/544/3576556544_5895c6d6-8741-40d3-9a7a-0ce2774fa4bf.png?cb=1598060511"
  />
</div>
<h1>Its Bookie Time!!!</h1>
<h1>bookie.description</h1>
<div>
  <form id="vote-form">
    <input placeholder="Your Name" type="text" class="vote-control" name="name" />
    <input placeholder="Your Email" type="email" name="email" class="vote-control"/>
    <div class="form-check-input" id="display-time-slot-container">
    </div>
    <div id="time-slot-container">
    </div>
    <button type="submit">VOTE</button>
  </form>
</div>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
  placeat obcaecati quos nam fugit minus aliquam recusandae quibusdam illo, at
  facere repudiandae ab provident dignissimos ipsum temporibus, optio laborum
  consectetur.
</p>
</div>
`

const resultsPage = `
<div id="results-page">
  <div class="row col-xs-12">
    <img
      style="margin-top: 10rem; min-width: 20rem;"
      src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/544/3576556544_5895c6d6-8741-40d3-9a7a-0ce2774fa4bf.png?cb=1598060511"
    />
  </div>
  <h1>The results so far!</h1>
  <h1>If you wish to change your vote here is your code <a id="user-token"></h1>

  <form id="token-check" action="">
<button type="submit" id="token-button">SUBMIT</button>
<input type="text" name="user-token">
</form>

  <table id="vote-table-conatiner">

  </table>

  <form id="append-vote-form" action="">
  <div id="revote-container">
  </div>
  </form>
</div>
`
const formPopOut = `
<div id="form-pop-out">
<input placeholder="Your Name" type="text" class="vote-control" name="name" />
<input placeholder="Your Email" type="email" name="email" class="vote-control"/>
<div class="form-check-input" id="display-time-slot-container">
</div>
<div id="time-slot-container">
</div>
<button id="re-vote-button" type="submit">VOTE</button>
</div>
`
