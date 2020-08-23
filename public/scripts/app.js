

$(document).ready(() => {
  console.log('connected')
  $('#create-bookie').on('click', landingToForm);

function landingToForm() {
  console.log('in')
  $('#render-form-page-container').hide()
  $('#form-container-fill').write(formPage)



}
  $('#form-submission').submit(function(event){
    event.preventDefault();

    $("#form-submission").each(function(){


      const bookieData = $(this).find('.form-control').serializeArray()
      const timeSlots = $(this).find('.time-slot').serializeArray()

      const arrayToObject = (array, keyField) =>
       array.reduce((obj, item) => {
         obj[item[keyField]] = item
         return obj
       }, {})

       const data1 = arrayToObject(bookieData, 'name')
       const data2 = arrayToObject(timeSlots, 'name')

       const arr = [];

       console.log(data1, data2)


    })

    })

})

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
        <div class="row">
          Event starts:
          <input class="time-slot" type="date" name="selected_start_date" />
          <span>

          </span>
          <input class="time-slot" type="time" name="selected_start_time" />
          <span>

          </span>
          Event ends:
          <input class="time-slot" type="date" name="selected_end_date" />
          <span>

          </span>
          <input class="time-slot" type="time" name="selected_end_time" />
          <span>

          </span>
          <button class="time-slot" type="submit" class="btn btn-primary">Add entry</button>
        </div>
      </article>

      <article id="time-slot-container">
        <div class="row">
          Event starts:
          <input class="time-slot" type="date" name="selected_start_date" />
          <span>

          </span>
          <input class="time-slot" type="time" name="selected_start_time" />
          <span>

          </span>
          Event ends:
          <input class="time-slot" type="date" name="selected_end_date" />
          <span>

          </span>
          <input class="time-slot" type="time" name="selected_end_time" />
          <span>

          </span>
          <button class="time-slot" type="submit" class="btn btn-primary">Add entry</button>
        </div>
      </article>

      <button id="main-form-button" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </section>
`






