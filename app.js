
//Check Browser Type ============
var mie = (navigator.appName == "Microsoft Internet Explorer")?true:false;

//Canvas Info ===================
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Keyboard Events ===============
document.onkeypress = keyClick;
document.onkeydown = getKeyDown;
document.onkeyup = getKeyReleased; 

//Hold Key Value ================
var keyButton = "";
var str = "";

//Keys Pressed ================
var keys = {};

function getKeyReleased (e) {

  keyButton = getKeyPressed(e);

  //Handle Capitalization
  if (!keys.SHIFT) { keyButton = keyButton.toLowerCase(); }
  if (keys.SHIFT) { keyButton = keyButton.toUpperCase(); }

  //ENTER KEY (e.which 13 && e.keyCode 13)
  if (e.which == 13 || e.keyCode == 13) { keyButton = "ENTER"; }
  //LEFT ARROW (e.which 37 && e.keyCode 37)
  if (e.which == 37 || e.keyCode == 37) { keyButton = "L_ARROW"; } 
  //UP ARROW (e.which 38 && e.keyCode 38)
  if (e.which == 38 || e.keyCode == 38) { keyButton = "U_ARROW"; }
  //RIGHT ARROW (e.which 39 && e.keyCode 39)
  if (e.which == 39 || e.keyCode == 39) { keyButton = "R_ARROW"; } 
  //DOWN ARROW (e.which 40 && e.keyCode 40)
  if (e.which == 40 || e.keyCode == 40) { keyButton = "D_ARROW"; } 
  //DELETE KEY (e.which 8 && e.keyCode 8)
  if ((e.which == 8 || e.keyCode == 8)) { keyButton = "DELETE"; }
  //SHIFT Key
  if (e.which == 16 || e.keyCode == 16) { keyButton = "SHIFT" };
  //CTRL Key
  if (e.which == 17 || e.keyCode == 17) { keyButton = "CTRL" }
  //ALT Key
  if (e.which == 18 || e.keyCode == 18) { keyButton = "ALT" }

  //Show key un-pressed
  //console.log("Un-pressed: " + keyButton);

  //Remove lower case of key
  delete keys[keyButton.toLowerCase()];
  //Remove upper case of key
  delete keys[(keyButton.toUpperCase())];

}

function getKeyPressed (e) {
  return String.fromCharCode(e.which || e.keyCode).toUpperCase();
}
function getKeyDown (e) {
  if (e) {
    /*
     * Delete -> 8 (Chrome)
     * Arrow Keys -> 37,38,39,40
     * Shift Key -> 16
     * CTRL Key -> 17
     * ALT Key -> 18
     */
    if (e.keyCode == 8 || (e.keyCode >= 37 && e.keyCode <= 40) || e.keyCode == 16 || e.keyCode == 17 || e.keyCode == 18) { keyClick(e); }
  };
}
function keyClick (e) {

  keyButton = getKeyPressed(e);

  //SHIFT KEY (e.shiftkey) || e.which / e.keyCode 16 onKeyDown only
  if (e.which == 16 || e.keyCode == 16) { 
    keyButton = "SHIFT"; 
    keys.SHIFT = true;
  }
  //CTRL Key
  if (e.which == 17 || e.keyCode == 17) { 
    keyButton = "CTRL"; 
  }
  //ALT Key
  if (e.which == 18 || e.keyCode == 18) { 
    keyButton = "ALT";
  }

  //Handle Capitalization
  if (!keys.SHIFT) { keyButton = keyButton.toLowerCase(); }
  if (keys.SHIFT) { keyButton = keyButton.toUpperCase(); }

  //ENTER KEY (e.which 13 && e.keyCode 13)
  if (e.which == 13 || e.keyCode == 13) { keyButton = "ENTER"; }

  if (String.fromCharCode(keyButton) != "&") {
    
  }
  //UP ARROW (e.which 38 && e.keyCode 38)
  if (e.keyCode == 38 && String.fromCharCode(keyButton) == "&") { keyButton = "U_ARROW"; }
  //DOWN ARROW (e.which 40 && e.keyCode 40)
  if (e.keyCode == 40 && String.fromCharCode(keyButton) == "(") { keyButton = "D_ARROW"; } 
  //LEFT ARROW (e.which 39 && e.keyCode 39)
  if (e.keyCode == 37 && String.fromCharCode(keyButton) == "%") { keyButton = "L_ARROW"; } 
  //RIGHT ARROW (e.which 40 && e.keyCode 40)
  if (e.keyCode == 39 && String.fromCharCode(keyButton) == "'") { keyButton = "R_ARROW"; } 

  //DELETE KEY (e.which 8 && e.keyCode 8)
  if ((e.which == 8 || e.keyCode == 8)) { keyButton = "DELETE"; }

  keys[keyButton] = true;

  //Show key pressed
  console.log("Pressed: " + keyButton);

  e.preventDefault();
}


function showKeys() {
  for (key in keys) { 
    if (keys[key] == true) { str += key + " + "; } 
  }

  ctx.fillText("Keys Pressed: " + str, 40, 40);
  str = "";
}
function showKeysArray() {

  var row = 0;
  var rowKeys = "";
  var i = 0;

  //Show Keys array
  for (key in keys) { 

    rowKeys += key + " + ";
    i++;
    
    ctx.fillText("Keys Array: " + rowKeys, 40, 100 + (20 * row));
    
    //Move to next row
    if (i == 3) { rowKeys = ""; row++; i = 0; }
  }

  str = "";
}

function displayKeysPressed() {

  ctx.clearRect(0,0, canvas.width, canvas.height);

  ctx.fillStyle = "#0FF";
  ctx.font = "18px Arial";

  showKeys();
  showKeysArray();
}

//Refresh Rate
var draw = setInterval(displayKeysPressed, (1000 / 60));
//END MOUSE AND KEYBOARD =========
