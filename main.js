function checkColor() {
  var inputColor = document.getElementById("color").value.toLowerCase();

  switch (inputColor) {
    case "red":
      document.getElementById("kulay").innerHTML = "STOP!";
      break;
    case "yellow":
      document.getElementById("kulay").innerHTML = "CAUTION!";
      break;
    case "green":
      document.getElementById("kulay").innerHTML = "GO!";
      break;
    default:
      document.getElementById("kulay").innerHTML = "Invalid Entry. Try red, yellow, or green.";
      break;
  }
}
