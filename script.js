// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    //Add variable for time
    //Add for loop
    //Add if statements
    var timeBlockCode = ""
    for (let i = 9; i < 18; i++) {
        var timeBlockKey = "hour-" + i
        var storedentry = localStorage.getItem(timeBlockKey) || ""
        if (i < 12) {
            var hourdisplay = i + "AM"
        } else if (i === 12) {
            var hourdisplay = i + "PM"
        } else {
            var hourdisplay = (i - 12) + "PM"
        }
        timeBlockCode += `<div id="hour-${i}" class="row time-block">
        <div class="col-2 col-md-1 hour text-center py-3">${hourdisplay}</div>
        <textarea class="col-8 col-md-10 description" rows="3">${storedentry} </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`
    }
    $("#timeblocks").html(timeBlockCode)
    $("#timeblocks").on("click", ".saveBtn", function () {
    var planner = $(this).siblings(".description").val()
    var hour = $(this).parent().attr("id")

    console.log("saveBtn", planner, hour)
    localStorage.setItem(planner, hour)

    })

    //Current Time
    var currenttime = dayjs().hour() 

    for (let i = 9; i < 18; i++) {
        var timeBlockKey = "hour-" + i
        if (currenttime < i) {
        //future, present, past = same
        $("#" + timeBlockKey).addClass("future")
        }else if (currenttime === i) {
        $("#" + timeBlockKey).addClass("present")
        }else {
        $("#"+ timeBlockKey).addClass("past")
        }
        }
    
        //research format for date
        $("#currentday").text(dayjs().format("MM/DD/YYYY"))

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
});
