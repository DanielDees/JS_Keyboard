
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

//Keys Depressed ================
var keys = {

    //Special
    ENTER: false,
    SHIFT: false,
    DELETE: false,

    //Arrow Keys
    UP_ARROW: false,
    DOWN_ARROW: false,
    LEFT_ARROW: false,
    RIGHT_ARROW: false,
};

function getKeyReleased (e) {

  keyButton = getKeyPressed(e);

  //Handle Capitalization
  if (!keys.SHIFT) { keyButton = keyButton.toLowerCase(); }
  if (keys.SHIFT) { keyButton = keyButton.toUpperCase(); }

  //ENTER KEY (e.which 13 && e.keyCode 13)
  if (e.which == 13 || e.keyCode == 13) { keyButton = "ENTER"; }
  //LEFT ARROW (e.which 37 && e.keyCode 37)
  if (e.which == 37 || e.keyCode == 37) { keyButton = "LEFT_ARROW"; } 
  //UP ARROW (e.which 38 && e.keyCode 38)
  if (e.which == 38 || e.keyCode == 38) { keyButton = "UP_ARROW"; }
  //RIGHT ARROW (e.which 39 && e.keyCode 39)
  if (e.which == 39 || e.keyCode == 39) { keyButton = "RIGHT_ARROW"; } 
  //DOWN ARROW (e.which 40 && e.keyCode 40)
  if (e.which == 40 || e.keyCode == 40) { keyButton = "DOWN_ARROW"; } 
  //DELETE KEY (e.which 8 && e.keyCode 8)
  if ((e.which == 8 || e.keyCode == 8)) { keyButton = "DELETE"; }

  //Show key un-pressed
  //console.log("Un-pressed: " + keyButton);

  keys[keyButton] = false;

  //SHIFT Key
  if (e.which == 16 || e.keyCode == 16) { keys.SHIFT = false; };
  //CTRL Key
  if (e.which == 17 || e.keyCode == 17) { keys.CTRL = false; keys.ctrl = false; }
  //ALT Key
  if (e.which == 18 || e.keyCode == 18) { keys.ALT = false; keys.alt = false; }
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

    keyButton = "ctrl";
    keys.ctrl = true; 
  }
  //ALT Key
  if (e.which == 18 || e.keyCode == 18) { 

    keyButton = "alt";
    keys.alt = true;
  }

  //Handle Capitalization
  if (!keys.SHIFT) { keyButton = keyButton.toLowerCase(); }
  if (keys.SHIFT) { keyButton = keyButton.toUpperCase(); }

  //ENTER KEY (e.which 13 && e.keyCode 13)
  if (e.which == 13 || e.keyCode == 13) { keyButton = "ENTER"; }

  //UP ARROW (e.which 38 && e.keyCode 38)
  if (e.which == 38 || e.keyCode == 38) { keyButton = "UP_ARROW"; }
  //DOWN ARROW (e.which 40 && e.keyCode 40)
  else if (e.which == 40 || e.keyCode == 40) { keyButton = "DOWN_ARROW"; } 
  //LEFT ARROW (e.which 39 && e.keyCode 39)
  else if (e.which == 37 || e.keyCode == 37) { keyButton = "LEFT_ARROW"; } 
  //RIGHT ARROW (e.which 40 && e.keyCode 40)
  else if (e.which == 39 || e.keyCode == 39) { keyButton = "RIGHT_ARROW"; } 

  //DELETE KEY (e.which 8 && e.keyCode 8)
  if ((e.which == 8 || e.keyCode == 8)) { keyButton = "DELETE"; }

  keys[keyButton] = true;

  //Show key pressed
  console.log("Pressed: " + keyButton);

  e.preventDefault();
}
function displayKeysPressed() {

  ctx.clearRect(0,0, canvas.width, canvas.height);

  ctx.fillStyle = "#0FF";
  ctx.font = "18px Arial";

  for (key in keys) { if (keys[key] == true) { str += key + " + "; } }

  ctx.fillText("Keys Pressed: " + str, 40, 40);
  str = "";
}

//Refresh Rate
var draw = setInterval(displayKeysPressed, (1000 / 60));
//END MOUSE AND KEYBOARD =========
