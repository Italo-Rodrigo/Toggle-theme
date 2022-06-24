const body = document.querySelector("body");
const swap = document.querySelector("input");

swap.addEventListener("click", change);

function change() {
  if (body.className == "darkTheme") {
    body.setAttribute("class", "whiteTheme");
  } else {
    body.setAttribute("class", "darkTheme");
  }
}
