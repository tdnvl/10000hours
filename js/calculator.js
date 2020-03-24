var topic;
var hours;
var z;
var result;
var url;
var intent;
var twitlink;
var x;
var years;
var d = new Date();
var y = d.getFullYear();

function calculateThatShit() {
    "use strict";
    topic = document.getElementById("topic").value;
    hours = document.getElementById("hours").value;
    if (hours < 24) {
        x = (10000 / (hours * 365));
        years = x.toFixed(1);
    } else if (isNaN(hours)) {
        alert('This is not a number. Please enter a number from 1 to 24');
    } else {
        alert('Your number (' + hours + ') is above 24. Please enter a number from 1 to 24');
    }
    z = Math.ceil(y + x);
    result = "It will take you " + years + " years to master " + topic + ".<br/> The year will be " + z + ".";
    document.getElementById("demo").innerHTML = result;
    console.log(years);
    tweetThatShit(years,topic,z)
}

function tweetThatShit() {
    "use strict";
    console.log(years);
    url = encodeURIComponent('http://10000hourscalculator.com');
    intent = encodeURIComponent('It will take me ' + years + ' years to master ' + topic + '. The year will be ' + z + '. Calculate your goal year at ');
    twitlink = 'https://twitter.com/intent/tweet?text=' + intent + '&url=' + url + '&hashtags=' + '10000hours';
    $('#twittershare').attr('href', twitlink);
}