var birthDate = document.querySelector(".birth-date");
var luckyNumber = document.querySelector(".lucky-number");
var computeButton = document.querySelector(".compute-btn");
var output = document.querySelector(".output");

function isLucky(birthDate, luckyNumber) {
  var sum = 0;
  const dateDigits = birthDate.split("");
  for (var i = 0; i < dateDigits.length; i++) {
    if (dateDigits[i] !== "-") {
      sum = sum + Number(dateDigits[i]);
    }
  }
  if (sum % luckyNumber === 0) {
    return true;
  } else {
    return false;
  }
}

function clickHandler() {
  if (birthDate.value !== "" && luckyNumber.value !== "") {
    var result = isLucky(birthDate.value, luckyNumber.value);
    if (result === true) {
      output.innerHTML = "You are very lucky";
    } else {
      output.innerHTML = "Sorry, better luck next time";
    }
  } else {
    output.innerHTML = "Please fill all the details";
  }
}
computeButton.addEventListener("click", clickHandler);