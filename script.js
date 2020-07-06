
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
