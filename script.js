
var timeBlocks = $(".container");
// container for your timeblocks

var timeDisplay = moment().format('MMMM Do YYYY, h:mm:ss a');
// displaying time through moment.js

var timeDiv = $("#currentDay");
timeDiv.append(timeDisplay);

