//CST 252 Midterm Project
//Author: CST 252 Group 7
//Created: April 12th 2021
//License: Public Domain

var $mediabody = $('.mediabody');

$mediabody.waypoint(function(){
  $mediabody.addClass('js-mediabody-animate');
}, {offset: '40%'});

// var $mediabody2 = $('.mediabody2');
//
// $mediabody.waypoint(function(){
//   $mediabody.addClass('js-mediabody-animate2');
// }, {offset: '50%'});


//Hide / Display elements
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
