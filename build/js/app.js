(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Time(alarm) {
  this.alarm = alarm;
};

Time.prototype.alarmTime = function() {
  // var currentTime = moment().format('hh:mm:ss a');
};

exports.alarmclockModule = Time;

},{}],2:[function(require,module,exports){
var Time = require('./../js/alarmclock.js').alarmclockModule;


$(document).ready(function(){
  setInterval(function clock() {
    $('#time').text(moment().format('hh:mm:ss a'));
    return clock;

  }(), 1000);

  $("#submitAlarm").submit(function(event) {
    event.preventDefault();
    var alarmSet = $('#newAlarm').val();
    var alarmDisplay = new Time(alarmSet);
    alarmDisplay.alarmTime();
      $('#solution').text("You want to wake up at " + alarmSet + " .");
  });

  if (alarmSet === Time) {
    alert('Wake Up!');
  }
});

},{"./../js/alarmclock.js":1}]},{},[2]);
