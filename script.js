
var timeBlocks = $(".container");
// container for your timeblocks

var timeDisplay = moment().format('MMMM Do YYYY, h:mm:ss a');
// displaying time through moment.js

var timeDiv = $("#currentDay");
timeDiv.append(timeDisplay);

// Array of Numbers that represent the Hours

var timeList = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM"
];

var idTime = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17"
];


// create a loop function so that you can create your work-day-scheduler time blocks
for (var i=0; i < timeList.length; i++){
    var newRow = $("<div class ='row time-block'>").attr("id", idTime[i]);
    // the attr() method sets or returns attributes and values of the selected elements.
    var newDiv2 = $("<div class='hour col-1'>");
    //aka <div> being made for the time column 
    var newDiv = $("<textarea class='col-10'>");
    //aka making a text area through the <text area> tag 
    var newButt = $("<button type = 'button' class='saveBtn col-1 far fa-save'>");
    //aka making a button with a save icon

    // Now you have a small column for the current hour, rows, large column for your text area for the rows, and a save button
    // Afterwards you will append them all to create your work-day-scheduler 

    timeBlocks.append(newRow);
    // the container will now hold the newRow

    newDiv2.text(timeList[i]);
    // column that you created for the time, you will be displaying the text of the timeList array that hold all the hours

    newRow.append(newDiv2);
    // the column of time needs to be appended to the newRow

    newDiv.text();
    newRow.append(newDiv);
    // the text area needs to be appended to the newRow

    newButt.text();
    newRow.append(newButt);
    // the save button needs to be appended to the newRow

}

    // now that everything is appended, everything should show properly

    // Now try to locally storage everything from the text field 
    // getting item from the 

    localStorageFunction();
// must include here after you created your function that way when the user types in the text area field, his input can be saved.

    function localStorageFunction(){
        $("textarea")[0].value = localStorage.getItem("textarea1");
        $("textarea")[1].value = localStorage.getItem("textarea2");
        $("textarea")[2].value = localStorage.getItem("textarea3");
        $("textarea")[3].value = localStorage.getItem("textarea4");
        $("textarea")[4].value = localStorage.getItem("textarea5");
        $("textarea")[5].value = localStorage.getItem("textarea6");
        $("textarea")[6].value = localStorage.getItem("textarea7");
        $("textarea")[7].value = localStorage.getItem("textarea8");
        $("textarea")[8].value = localStorage.getItem("textarea9");
    }

// now create a onClick event listener on the save button to help initialize localStorage
$("button").on("click", function(event) {
    event.preventDefault();
    //The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

    // create variables to hold the value of the text area
    var textArea1 = $("textarea")[0].value;
    var textArea2 = $("textarea")[1].value;
    var textArea3 = $("textarea")[2].value;
    var textArea4 = $("textarea")[3].value;
    var textArea5 = $("textarea")[4].value;
    var textArea6 = $("textarea")[5].value;
    var textArea7 = $("textarea")[6].value;
    var textArea8 = $("textarea")[7].value;
    var textArea9 = $("textarea")[8].value;


    //locally retrieve the two parameters needed for when you locally Store an item which is "textArea1" and textArea1, etc
    localStorage.setItem("textarea1", textArea1);
    localStorage.setItem("textarea2", textArea2);
    localStorage.setItem("textarea3", textArea3);
    localStorage.setItem("textarea4", textArea4);
    localStorage.setItem("textarea5", textArea5);
    localStorage.setItem("textarea6", textArea6);
    localStorage.setItem("textarea7", textArea7);
    localStorage.setItem("textarea8", textArea8);
    localStorage.setItem("textarea9", textArea9);
});


// now that the user can save his input into the text field. 
// create a function where after a certain hour where be be represented as the past, present, and future. 
// past = white
// present = red 
// future = green 

function hourUpdater(){
    var currentHour = moment().hours();
    // used the moment.js data library in conjunction with the hours function
    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split(" ")[0]);
        // The parseInt() function parses a string and returns an integer.

        // create an if/else comparison to execute the css colors for past, present, and future
        // 
        if (blockHour < currentHour){
            $(this).addClass("past");
        } else if (blockHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");


        }    
    });

}

hourUpdater();
// if not included, the function is not run and will not populate the colors 
