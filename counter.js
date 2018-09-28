function incr() {
  let counter = document.getElementById("counter");
  counter.innerHTML++;
}

function decr() {
  let counter = document.getElementById("counter");
  if(counter.innerHTML > 0) {
    counter.innerHTML--;
  } else {
    window.alert("Counter cannot go below 0!");
  }
}

function redir() {
  window.location = "https://www.codecademy.com/emchangcogs3";
}
