function mouseOver() {
  document.getElementById("me").src = "../img/me.jpg";
}

function mouseAway() {
  document.getElementById("me").src = "../img/mePop.png";
}

function jumboOver() {
  document.getElementById("homeJumbo").style.backgroundColor = "rgba(200, 200, 200, 0)";
  document.getElementById("title1").style.color = "white";
  document.getElementById("title2").style.color = "white";
}

function jumboAway() {
  document.getElementById("homeJumbo").style.backgroundColor = "rgba(200, 200, 200, 0.7)";
  document.getElementById("title1").style.color = "black";
  document.getElementById("title2").style.color = "black";
}
