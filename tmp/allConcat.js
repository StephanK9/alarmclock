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
});
