function handleClick() {
  var humanYear = document.getElementById("input").value;
  var dogYear = humanYear * 10.5;
  document.getElementById("year-result").innerHTML = dogYear + " years";
  document.getElementById("month-result").innerHTML = dogYear * 12 + " months";
  document.getElementById("day-result").innerHTML = dogYear * 365 + " days";
}
