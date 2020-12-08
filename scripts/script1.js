let boardState = [
  { name: "f0", color: "e", amount: "0" },
  {
    name: "f1",
    color: "r",
    amount: 2,
  },
  {
    name: "f2",
    color: "e",
    amount: 0,
  },
  {
    name: "f3",
    color: "e",
    amount: 0,
  },
  {
    name: "f4",
    color: "e",
    amount: 0,
  },
  {
    name: "f5",
    color: "e",
    amount: 0,
  },
  {
    name: "f6",
    color: "b",
    amount: 5,
  },
  {
    name: "f7",
    color: "e",
    amount: 0,
  },
  {
    name: "f8",
    color: "b",
    amount: 3,
  },
  {
    name: "f9",
    color: "e",
    amount: 0,
  },
  {
    name: "f10",
    color: "e",
    amount: 0,
  },
  {
    name: "f11",
    color: "e",
    amount: 0,
  },
  {
    name: "f12",
    color: "r",
    amount: 5,
  },
  {
    name: "f13",
    color: "b",
    amount: 5,
  },
  {
    name: "f14",
    color: "e",
    amount: 0,
  },
  {
    name: "f15",
    color: "e",
    amount: 0,
  },
  {
    name: "f16",
    color: "e",
    amount: 0,
  },
  {
    name: "f17",
    color: "r",
    amount: 3,
  },
  {
    name: "f18",
    color: "e",
    amount: 0,
  },
  {
    name: "f19",
    color: "r",
    amount: 5,
  },
  {
    name: "f20",
    color: "e",
    amount: 0,
  },
  {
    name: "f21",
    color: "e",
    amount: 0,
  },
  {
    name: "f22",
    color: "e",
    amount: 0,
  },
  {
    name: "f23",
    color: "e",
    amount: 0,
  },
  {
    name: "f24",
    color: "b",
    amount: 2,
  },
  {
    name: "f25", //bar red [25]
    color: "r",
    amount: 0,
  },
  {
    name: "f26", //bar black [26]
    color: "b",
    amount: 0,
  },
  {
    name: "f27", //exit red
    color: "r",
    amount: 0,
  },
  {
    name: "f28", //exit black
    color: "b",
    amount: 0,
  },
];

let moveButtonDelete;
let redTurnFlag = false;
let blackTurnFlag = false;
let firstRedRoll;
let firstBlackRoll;
let messageinput = document.getElementById("message");
let moveValue = 0;
let movementsAvailable = 0;
let fieldObject;
let checkerURL;

// REFRESHING BOARD STATUS
function boardRefresh() {
  if (redTurnFlag == true && movementsAvailable == 0) {redTurn();}
  if (blackTurnFlag == true && movementsAvailable == 0) {blackTurn();}
  for (let i = 1; i<=26; i++) {
    fieldObject = boardState.find(x => {return x.name===("f"+i)}) ; 
    if (fieldObject.color == "r") {checkerUrl = '<img src="assets/redChecker.svg">';}
    if (fieldObject.color == "b") {checkerUrl = '<img src="assets/blackChecker.svg">';}
    document.getElementById(fieldObject.name).innerHTML = "";
    document.getElementById(fieldObject.name).innerHTML = checkerUrl.repeat(fieldObject.amount);
    } 
    return;
}
// PLAYER 1 ROLLING DICE
function rollPlayer1Click() {
  let rollDice1 = getRndInteger(1, 6);
  let rollDice2 = getRndInteger(1, 6);
  messageinput.innerHTML = "Player RED please use your moves";
  $("#rollPlayer1").fadeOut(300);

  document.getElementById("dice1").src = "assets/diceR" + rollDice1 + ".svg";
  document.getElementById("dice2").src = "assets/diceR" + rollDice2 + ".svg";
  if (rollDice1 == rollDice2) {
    enableRed4();
    messageinput.innerHTML =
      "Player RED you have " + movementsAvailable + " moves";
    document.getElementById("player1Move1").innerHTML = rollDice1;
    document.getElementById("player1Move2").innerHTML = rollDice1;
    document.getElementById("player1Move3").innerHTML = rollDice1;
    document.getElementById("player1Move4").innerHTML = rollDice1;
  } else {
    enableRed2();
    messageinput.innerHTML =
      "Player RED you have " + movementsAvailable + " moves";
    document.getElementById("player1Move1").innerHTML = rollDice1;
    document.getElementById("player1Move2").innerHTML = rollDice2;
  }
}
// ENABLING 4 MOVES FOR PLAYER 1
function enableRed4() {
  movementsAvailable = 4;
  $("#player1Move1").fadeIn(300);
  $("#player1Move2").fadeIn(300);
  $("#player1Move3").fadeIn(300);
  $("#player1Move4").fadeIn(300);
  $("#dice1").fadeIn(300);
  $("#dice2").fadeIn(300);
}
// ENABLING 2 MOVES FOR PLAYER 1
function enableRed2() {
  movementsAvailable = 2;
  $("#player1Move1").fadeIn(300);
  $("#player1Move2").fadeIn(300);
  $("#dice1").fadeIn(300);
  $("#dice2").fadeIn(300);
}
// PLAYER 2 ROLLING DICE
function rollPlayer2Click() {
  let rollDice1 = getRndInteger(1, 6);
  let rollDice2 = getRndInteger(1, 6);
  messageinput.innerHTML = "Player BLACK please use your moves";
  $("#rollPlayer2").fadeOut(300);
  document.getElementById("dice3").src = "assets/diceB" + rollDice1 + ".svg";
  document.getElementById("dice4").src = "assets/diceB" + rollDice2 + ".svg";
  if (rollDice1 == rollDice2) {
    enableBlack4();
    movementsAvailable = 4;
    messageinput.innerHTML =
      "Player BLACK you have " + movementsAvailable + " moves";
    document.getElementById("player2Move1").innerHTML = rollDice1;
    document.getElementById("player2Move2").innerHTML = rollDice1;
    document.getElementById("player2Move3").innerHTML = rollDice1;
    document.getElementById("player2Move4").innerHTML = rollDice1;
  } else {
    enableBlack2();
    movementsAvailable = 2;
    messageinput.innerHTML =
      "Player BLACK you have " + movementsAvailable + " moves";
    document.getElementById("player2Move1").innerHTML = rollDice1;
    document.getElementById("player2Move2").innerHTML = rollDice2;
  }
}
// ENABLING 4 MOVES FOR PLAYER 2
function enableBlack4() {
  movementsAvailable = 4;
  $("#player2Move1").fadeIn(300);
  $("#player2Move2").fadeIn(300);
  $("#player2Move3").fadeIn(300);
  $("#player2Move4").fadeIn(300);
  $("#dice3").fadeIn(300);
  $("#dice4").fadeIn(300);
}
// ENABLING 2 MOVES FOR PLAYER 2
function enableBlack2() {
  movementsAvailable = 2;
  $("#player2Move1").fadeIn(300);
  $("#player2Move2").fadeIn(300);
  $("#dice3").fadeIn(300);
  $("#dice4").fadeIn(300);
}
// ROLL 1-6
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ENABLE RED TURN
function redTurn() {
  document.getElementById("message").innerHTML = "RED turn, please roll";
  $(".player1").fadeIn(300);
  $(".player2").fadeOut(300);
}
// ENABLE BLACK TURN
function blackTurn() {
  document.getElementById("message").innerHTML = "BLACK turn, please roll";
  $(".player2").fadeIn(300);
  $(".player1").fadeOut(300);
}
// RED PLAYER FIRST ROLL
function firstPlayerRollStart() {
  firstRedRoll = getRndInteger(1, 6);
  document.getElementById("message2").innerHTML = "RED rolled: " + firstRedRoll;
  document.getElementById("message2").disabled = true;
  checkFirstRound();
}
// BLACK PLAYER FIRST ROLL
function secondPlayerRollStart() {
  firstBlackRoll = getRndInteger(1, 6);
  document.getElementById("message3").innerHTML =
  "BLACK rolled: " + firstBlackRoll;
  document.getElementById("message3").disabled = true;
  checkFirstRound();
}
// BOTH PLAYERS FIRST ROLLS CHECK
function checkFirstRound() {
  if (firstRedRoll > firstBlackRoll) {
    redTurnFlag = true;
    blackTurnFlag = false;
    document.getElementById("message").innerHTML = "RED won first move";
    document.getElementById("message4").style.visibility = "visible";
  } else if (firstRedRoll < firstBlackRoll) {
    redTurnFlag= false;
    blackTurnFlag = true;
    document.getElementById("message").innerHTML = "BLACK won first move";
    document.getElementById("message4").style.visibility = "visible";
  } else if (firstRedRoll == firstBlackRoll) {
    document.getElementById("message").innerHTML = "DRAW please roll again";
    firstRedRoll = 0;
    firstBlackRoll = 0;
    document.getElementById("message2").disabled = false;
    document.getElementById("message2").innerHTML = "RED ROLL";
    document.getElementById("message3").disabled = false;
    document.getElementById("message3").innerHTML = "BLACK ROLL";
  }
}
// BUTTON FINISHING FIRST ROLL STAGE
function okClick() {
  $(".firstRoll").fadeOut(300);
  return boardRefresh();
}
// BUTTON RED MOVE
function player1Move(x, y) {
  moveValue = x;
  moveButtonDelete = y;
  messageinput.innerHTML = "Select field to move by " + x;
  enableMove("r");
  return;
}
// BUTTON BLACK MOVE
function player2Move(x, y) {
  moveValue = x;
  moveButtonDelete = y;
  messageinput.innerHTML = "Select field to move by " + x;
  enableMove("b");
  return;
}
// ENABLING MOVE AND CHECKING POSSIBLE MOVES
function enableMove(x) {
  if (x == "b" && blackBar()) {
    document.getElementById(boardState[26].name).style.border ="3px dashed yellow";
    document.getElementById(boardState[26].name).addEventListener("click", move);
    document.getElementById(boardState[26].name).addEventListener("click", disableMove);
    document.getElementById(boardState[26].name).addEventListener("click", boardRefresh);
  } else if (x == "r" && redBar()) {
    document.getElementById(boardState[25].name).style.border ="3px dashed yellow";
    document.getElementById(boardState[25].name).addEventListener("click", move);
    document.getElementById(boardState[25].name).addEventListener("click", disableMove);
    document.getElementById(boardState[25].name).addEventListener("click", boardRefresh);
  } else {
    for (let i = 1; i<=24; i++) {
    fieldObject = boardState.find((x) => x.name == "f" + i);
    if (fieldObject.color.includes(x) && fieldObject.amount > 0) {
    document.getElementById(fieldObject.name).style.border ="3px dashed yellow";
    document.getElementById(fieldObject.name).addEventListener("click", move);
    document.getElementById(fieldObject.name).addEventListener("click", disableMove);
    document.getElementById(fieldObject.name).addEventListener("click", boardRefresh);
      }
    }
  }
 }
// DISABLING MOVE AND POSSIBLE MOVES
function disableMove() {
  for (let i = 1; i<=26; i++) {
    fieldObject = boardState.find((x) => x.name === "f" + i);
    document.getElementById(fieldObject.name).style.border = "";
    document.getElementById(fieldObject.name).removeEventListener("click", move);
    document.getElementById(fieldObject.name).removeEventListener("click", disableMove);
    document.getElementById(fieldObject.name).removeEventListener("click", boardRefresh);
    }
}
// MOVING 
function move() {  
  let newFieldIndex;
  let oldField = boardState.find((y) => y.name === this.id);
  if (oldField.color == "r") {newFieldIndex = "f" + (parseInt(this.id.substring(1)) + parseInt(moveValue));newField = boardState.find(z => z.name === newFieldIndex);}
  if (oldField.color == "b") {newFieldIndex ="f" + (parseInt(this.id.substring(1)) - parseInt(moveValue));newField = boardState.find(z => z.name === newFieldIndex);}
  if (redBar()) {newFieldIndex = "f"+parseInt(moveValue);newField = boardState.find(z => z.name === newFieldIndex);}
  else if (blackBar()) {newFieldIndex = "f"+parseInt(25-moveValue);newField = boardState.find(z => z.name === newFieldIndex);}
  else {newField = boardState.find(z => z.name === newFieldIndex);}

  if (checkMove(oldField,newField)==false) {messageinput.innerHTML="This move is not possible";return disableMove();};
  if (checkMove(oldField,newField)=="redBarAdd") {boardState[25].amount+=1; newField.amount=1;oldField.amount-=1; newField.color=oldField.color;}
  else if (checkMove(oldField,newField)=="blackBarAdd") {boardState[26].amount+=1; newField.amount=1;oldField.amount-=1;newField.color=oldField.color;}
  else {   
    newField.color = oldField.color;
    oldField.amount -= 1;
    newField.amount += 1;} 

  $("#" + moveButtonDelete).fadeOut(400);
  movementsAvailable -= 1;
  if (movementsAvailable == 0) {
  redTurnFlag = !redTurnFlag;
  blackTurnFlag = !blackTurnFlag;
  }
  boardRefresh();
}
// CHECKING IF MOVE IS POSSIBLE
function checkMove(oldField,newField){
 
  if (newField.amount >= 2 && newField.color != oldField.color)  return false;
  if (parseInt(newField.name.substring(1))<1||parseInt(newField.name.substring(1))>24) return false;
  if (newField.color!=oldField.color&&newField.amount==1&&oldField.color=="r"&&newField.color=="b") return "blackBarAdd";  
  if (newField.color!=oldField.color&&newField.amount==1&&oldField.color=="b"&&newField.color=="r") return "redBarAdd";
  return true;  
}


// CHECKING RED BAR STATE
function redBar() {
  if (boardState[25].amount > 0&&redTurnFlag==true) {
    return true;
  } else return false;
}
// CHECKING BLACK BAR STATE
function blackBar() {
  if (boardState[26].amount > 0&&blackTurnFlag==true) {
    return true;
  } else return false;
}