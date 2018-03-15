
//Canvas Info ===================
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Keyboard Events ===============
document.onkeypress = keyClick;
document.onkeydown = keyClick;
document.onkeyup = getKeyUp; 

//Keys Pressed ================
var keys = {};

//Still need to handle issues with capitalization
function getKeyUp (e) {

  var x = e.key;
  var xLower = x.toLowerCase();
  var xUpper = x.toUpperCase();

  console.log("Release: " + x + " | " + x.toUpperCase());

  delete keys[xLower];
  delete keys[xUpper];
}

function keyClick (e) {
  keys[e.key] = true;
  e.preventDefault();
  //console.log("Pressed: " + e.key);
}

function showKeys() {

  var i = 0;

  //Show Keys array
  for (key in keys) { 
    ctx.fillText("Keys Pressed:  " + key, 40, 40 + (30 * i));
    i++;
  }
}

function displayKeysPressed() {

  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.fillStyle = "#0FF";
  ctx.font = "18px Arial";

  showKeys();
}

//Refresh Rate
var draw = setInterval(displayKeysPressed, (1000 / 60));
//END MOUSE AND KEYBOARD =========
