function showMainOption(sidebar) {
  $('#productionList').load(`./html/${sidebar}.html`);
  w3_close();
}

function showAlbum() {
  $('#productionList').load('./html/album.html');
  w3_close();
}

function showEvent(type) {
  $('#productionList').load(`./html/event/${type}.html`);
  w3_close();
}

function showProduct(platform) {
  $('#productionList').load(`./html/${platform}/main.html`);
  w3_close();
}

// show option
function showOption(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}
