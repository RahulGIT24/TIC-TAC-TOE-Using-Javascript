//* Asking Player's Name
let playerX;
let player0;
while (playerX == null || playerX == "") {
  playerX = prompt("Enter name of Player X");
  if(playerX==null || playerX==""){
    window.alert("Please enter name of player");
  }
}
while (player0 == null || player0 == "") {
  player0 = prompt("Enter name of player 0");
  if(player0==null || player0==""){
    window.alert("Please enter name of player");
  }
}
document.getElementById("status").innerText = `${playerX}'s Turn`;

let check = 1;

//* Function to reset all the values
function reset() {
  document.getElementById("status").innerText = `${playerX}'s Turn`;
  check = 1;
  document.getElementById("b1").disabled = false;
  document.getElementById("b2").disabled = false;
  document.getElementById("b3").disabled = false;
  document.getElementById("b4").disabled = false;
  document.getElementById("b5").disabled = false;
  document.getElementById("b6").disabled = false;
  document.getElementById("b7").disabled = false;
  document.getElementById("b8").disabled = false;
  document.getElementById("b9").disabled = false;
  document.getElementById("b1").style.color = "";
  document.getElementById("b2").style.color = "";
  document.getElementById("b3").style.color = "";
  document.getElementById("b4").style.color = "";
  document.getElementById("b5").style.color = "";
  document.getElementById("b6").style.color = "";
  document.getElementById("b7").style.color = "";
  document.getElementById("b8").style.color = "";
  document.getElementById("b9").style.color = "";
  document.getElementById("b1").style.backgroundColor = "";
  document.getElementById("b2").style.backgroundColor = "";
  document.getElementById("b3").style.backgroundColor = "";
  document.getElementById("b4").style.backgroundColor = "";
  document.getElementById("b5").style.backgroundColor = "";
  document.getElementById("b6").style.backgroundColor = "";
  document.getElementById("b7").style.backgroundColor = "";
  document.getElementById("b8").style.backgroundColor = "";
  document.getElementById("b9").style.backgroundColor = "";
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("b4").value = "";
  document.getElementById("b5").value = "";
  document.getElementById("b6").value = "";
  document.getElementById("b7").value = "";
  document.getElementById("b8").value = "";
  document.getElementById("b9").value = "";
}

//* Function to start new game
function newGame() {
  location.reload();
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("b4").value = "";
  document.getElementById("b5").value = "";
  document.getElementById("b6").value = "";
  document.getElementById("b7").value = "";
  document.getElementById("b8").value = "";
  document.getElementById("b9").value = "";
}

//* Main Function

function mainFunc() {
  var b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  //* Checking Conditions for different possibilities

  if (b1 == "X" && b2 == "X" && b3 == "X") {
    document.getElementById("status").innerText = `${playerX} won the game`;
    window.alert(`${playerX} won the game!`);
    document.getElementById("b1").style.color = "red";
    document.getElementById("b1").style.backgroundColor = "black";
    document.getElementById("b2").style.color = "red";
    document.getElementById("b2").style.backgroundColor = "black";
    document.getElementById("b3").style.color = "red";
    document.getElementById("b3").style.backgroundColor = "black";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b1 == "0" && b2 == "0" && b3 == "0") {
    document.getElementById("status").innerText = `${player0} won the game`;
    window.alert(`${player0} won the game!`);
    document.getElementById("b1").style.color = "red";
    document.getElementById("b1").style.backgroundColor = "black";
    document.getElementById("b2").style.color = "red";
    document.getElementById("b2").style.backgroundColor = "black";
    document.getElementById("b3").style.color = "red";
    document.getElementById("b3").style.backgroundColor = "black";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    document.getElementById("status").innerText = `${playerX} won the game`;
    window.alert(`${playerX} won the game!`);
    document.getElementById("b4").style.color = "red";
    document.getElementById("b4").style.backgroundColor = "black";
    document.getElementById("b5").style.color = "red";
    document.getElementById("b5").style.backgroundColor = "black";
    document.getElementById("b6").style.color = "red";
    document.getElementById("b6").style.backgroundColor = "black";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b4 == "0" && b5 == "0" && b6 == "0") {
    document.getElementById("status").innerText = `${player0} won the game`;
    window.alert(`${player0} won the game!`);
    document.getElementById("b4").style.color = "red";
    document.getElementById("b4").style.backgroundColor = "black";
    document.getElementById("b5").style.color = "red";
    document.getElementById("b5").style.backgroundColor = "black";
    document.getElementById("b6").style.color = "red";
    document.getElementById("b6").style.backgroundColor = "black";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    document.getElementById("status").innerText = `${playerX} won the game`;
    window.alert(`${playerX} won the game!`);
    document.getElementById("b7").style.color = "red";
    document.getElementById("b7").style.backgroundColor = "black";
    document.getElementById("b8").style.color = "red";
    document.getElementById("b8").style.backgroundColor = "black";
    document.getElementById("b9").style.color = "red";
    document.getElementById("b9").style.backgroundColor = "black";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
  } else if (b7 == "0" && b8 == "0" && b9 == "0") {
    document.getElementById("status").innerText = `${player0} won the game`;
    window.alert(`${player0} won the game!`);
    document.getElementById("b7").style.color = "red";
    document.getElementById("b7").style.backgroundColor = "black";
    document.getElementById("b8").style.color = "red";
    document.getElementById("b8").style.backgroundColor = "black";
    document.getElementById("b9").style.color = "red";
    document.getElementById("b9").style.backgroundColor = "black";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
  } else if (b7 == "X" && b4 == "X" && b1 == "X") {
    document.getElementById("status").innerText = `${playerX} won the game`;
    window.alert(`${playerX} won the game!`);
    document.getElementById("b7").style.color = "red";
    document.getElementById("b7").style.backgroundColor = "black";
    document.getElementById("b4").style.color = "red";
    document.getElementById("b4").style.backgroundColor = "black";
    document.getElementById("b1").style.color = "red";
    document.getElementById("b1").style.backgroundColor = "black";
    document.getElementById("b9").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
  } else if (b7 == "0" && b4 == "0" && b1 == "0") {
    document.getElementById("status").innerText = `${player0} won the game`;
    window.alert(`${player0} won the game!`);
    document.getElementById("b7").style.color = "red";
    document.getElementById("b7").style.backgroundColor = "black";
    document.getElementById("b4").style.color = "red";
    document.getElementById("b4").style.backgroundColor = "black";
    document.getElementById("b1").style.color = "red";
    document.getElementById("b1").style.backgroundColor = "black";
    document.getElementById("b9").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    document.getElementById("status").innerText = `${playerX} won the game`;
    window.alert(`${playerX} won the game!`);
    document.getElementById("b2").style.color = "red";
    document.getElementById("b2").style.backgroundColor = "black";
    document.getElementById("b5").style.color = "red";
    document.getElementById("b5").style.backgroundColor = "black";
    document.getElementById("b8").style.color = "red";
    document.getElementById("b8").style.backgroundColor = "black";
    document.getElementById("b9").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b6").disabled = true;
  } else if (b2 == "0" && b5 == "0" && b8 == "0") {
    document.getElementById("status").innerText = `${player0} won the game`;
    window.alert(`${player0} won the game!`);
    document.getElementById("b2").style.color = "red";
    document.getElementById("b2").style.backgroundColor = "black";
    document.getElementById("b5").style.color = "red";
    document.getElementById("b5").style.backgroundColor = "black";
    document.getElementById("b8").style.color = "red";
    document.getElementById("b8").style.backgroundColor = "black";
    document.getElementById("b9").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b6").disabled = true;
  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    document.getElementById("status").innerText = `${playerX} won the game`;
    window.alert(`${playerX} won the game!`);
    document.getElementById("b9").style.color = "red";
    document.getElementById("b9").style.backgroundColor = "black";
    document.getElementById("b6").style.color = "red";
    document.getElementById("b6").style.backgroundColor = "black";
    document.getElementById("b3").style.color = "red";
    document.getElementById("b3").style.backgroundColor = "black";
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
  } else if (b3 == "0" && b6 == "0" && b9 == "0") {
    document.getElementById("status").innerText = `${player0} won the game`;
    window.alert(`${player0} won the game!`);
    document.getElementById("b3").style.color = "red";
    document.getElementById("b3").style.backgroundColor = "black";
    document.getElementById("b6").style.color = "red";
    document.getElementById("b6").style.backgroundColor = "black";
    document.getElementById("b9").style.color = "red";
    document.getElementById("b9").style.backgroundColor = "black";
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    document.getElementById("status").innerText = `${playerX} won the game`;
    window.alert(`${playerX} won the game!`);
    document.getElementById("b1").style.color = "red";
    document.getElementById("b1").style.backgroundColor = "black";
    document.getElementById("b5").style.color = "red";
    document.getElementById("b5").style.backgroundColor = "black";
    document.getElementById("b9").style.color = "red";
    document.getElementById("b9").style.backgroundColor = "black";
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b2").disabled = true;
  } else if (b1 == "0" && b5 == "0" && b9 == "0") {
    document.getElementById("status").innerText = `${player0} won the game`;
    window.alert(`${player0} won the game!`);
    document.getElementById("b1").style.color = "red";
    document.getElementById("b1").style.backgroundColor = "black";
    document.getElementById("b5").style.color = "red";
    document.getElementById("b5").style.backgroundColor = "black";
    document.getElementById("b9").style.color = "red";
    document.getElementById("b9").style.backgroundColor = "black";
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b2").disabled = true;
  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    document.getElementById("status").innerText = `${playerX} won the game`;
    window.alert(`${playerX} won the game!`);
    document.getElementById("b3").style.color = "red";
    document.getElementById("b3").style.backgroundColor = "black";
    document.getElementById("b5").style.color = "red";
    document.getElementById("b5").style.backgroundColor = "black";
    document.getElementById("b7").style.color = "red";
    document.getElementById("b7").style.backgroundColor = "black";
    document.getElementById("b6").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b2").disabled = true;
  } else if (b3 == "0" && b5 == "0" && b7 == "0") {
    document.getElementById("status").innerText = `${playerX} won the game`;
    window.alert(`${playerX} won the game!`);
    document.getElementById("b3").style.color = "red";
    document.getElementById("b3").style.backgroundColor = "black";
    document.getElementById("b5").style.color = "red";
    document.getElementById("b5").style.backgroundColor = "black";
    document.getElementById("b7").style.color = "red";
    document.getElementById("b7").style.backgroundColor = "black";
    document.getElementById("b6").disabled = true;
    document.getElementById("b1").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b9").disabled = true;
    document.getElementById("b2").disabled = true;
  } else if (
    (b1 == "X" || b1 == "0") &&
    (b2 == "X" || b2 == "0") &&
    (b3 == "X" || b3 == "0") &&
    (b4 == "X" || b4 == "0") &&
    (b5 == "X" || b5 == "0") &&
    (b6 == "X" || b6 == "0") &&
    (b7 == "X" || b7 == "0") &&
    (b8 == "X" || b8 == "0") &&
    (b9 == "X" || b9 == "0")
  ) {
    document.getElementById("status").innerHTML = "Match Tie!!!";
    alert("Match Tie!!");
  } else {
    if (check == 1) {
      document.getElementById("status").innerText = `${playerX}'s Turn`;
    } else if (check == 0) {
      document.getElementById("status").innerText = `${player0}'s Turn`;
    }
  }
}

//* Functions for checking values

function func1() {
  if (check == 1) {
    document.getElementById("b1").value = "X";
    document.getElementById("b1").disabled = true;
    check = 0;
  } else {
    document.getElementById("b1").value = "0";
    document.getElementById("b1").disabled = true;
    check = 1;
  }
}
function func2() {
  if (check == 1) {
    document.getElementById("b2").value = "X";
    document.getElementById("b2").disabled = true;
    check = 0;
  } else {
    document.getElementById("b2").value = "0";
    document.getElementById("b2").disabled = true;
    check = 1;
  }
}
function func3() {
  if (check == 1) {
    document.getElementById("b3").value = "X";
    document.getElementById("b3").disabled = true;
    check = 0;
  } else {
    document.getElementById("b3").value = "0";
    document.getElementById("b3").disabled = true;
    check = 1;
  }
}
function func4() {
  if (check == 1) {
    document.getElementById("b4").value = "X";
    document.getElementById("b4").disabled = true;
    check = 0;
  } else {
    document.getElementById("b4").value = "0";
    document.getElementById("b4").disabled = true;
    check = 1;
  }
}
function func5() {
  if (check == 1) {
    document.getElementById("b5").value = "X";
    document.getElementById("b5").disabled = true;
    check = 0;
  } else {
    document.getElementById("b5").value = "0";
    document.getElementById("b5").disabled = true;
    check = 1;
  }
}
function func6() {
  if (check == 1) {
    document.getElementById("b6").value = "X";
    document.getElementById("b6").disabled = true;
    check = 0;
  } else {
    document.getElementById("b6").value = "0";
    document.getElementById("b6").disabled = true;
    check = 1;
  }
}
function func7() {
  if (check == 1) {
    document.getElementById("b7").value = "X";
    document.getElementById("b7").disabled = true;
    check = 0;
  } else {
    document.getElementById("b7").value = "0";
    document.getElementById("b7").disabled = true;
    check = 1;
  }
}
function func8() {
  if (check == 1) {
    document.getElementById("b8").value = "X";
    document.getElementById("b8").disabled = true;
    check = 0;
  } else {
    document.getElementById("b8").value = "0";
    document.getElementById("b8").disabled = true;
    check = 1;
  }
}
function func9() {
  if (check == 1) {
    document.getElementById("b9").value = "X";
    document.getElementById("b9").disabled = true;
    check = 0;
  } else {
    document.getElementById("b9").value = "0";
    document.getElementById("b9").disabled = true;
    check = 1;
  }
}
