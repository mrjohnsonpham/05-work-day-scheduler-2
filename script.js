
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
    "12 AM",
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