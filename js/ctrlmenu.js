function showKtown4u() {
  var x = document.getElementById("ktown4u");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

function showKtown4uLimited() {
  $('#productionList').load('./html/k4-limit.html');
}

function showKtown4uABC() {
  $('#productionList').load('./html/k4-abc.html');
}

function showKtown4uD() {
  $('#productionList').load('./html/k4-d.html');
}

function showSRABC() {
  $('#productionList').load('./html/sr-abc.html');
}

function showSRD() {
  $('#productionList').load('./html/sr-d.html');
}


function showStarRiver() {
  var x = document.getElementById("starRiver");
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
