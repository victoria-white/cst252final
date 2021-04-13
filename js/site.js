//CST 252 Midterm Project
//Author: CST 252 Group 7
//Created: April 12th 2021
//License: Public Domain

var $mediabody = $('.mediabody');

$mediabody.waypoint(function(){
  $mediabody.addClass('js-mediabody-animate');
}, {offset: '50%'});

var $mediabody2 = $('.mediabody2');

$mediabody.waypoint(function(){
  $mediabody.addClass('js-mediabody-animate2');
}, {offset: '50%'});
