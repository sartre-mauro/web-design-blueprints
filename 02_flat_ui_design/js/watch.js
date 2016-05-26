var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function getTime() {
  var today = new Date();

  var h = today.getHours();
  var m = correctDigit(today.getMinutes());
  var s = correctDigit(today.getSeconds());

  var d = days[today.getDay()];
  var mo = months[today.getMonth()];
  var y = today.getFullYear();

  document.getElementById('time').innerHTML =
      '<h1 class="large">' + h + ' : ' + m + " : " + s + '</h1>'
      + ' <span class="dark">' + d + ' ,</span>'
      + ' <span class="dark">' + mo + ' </span>'
      + ' <span class="dark">' + y + '</span>';

  var t = setTimeout(function () {
    getTime()
  }, 500);


}

function correctDigit(i) {
  if (i < 10) i = "0" + i;

  return i;
}
