function changeText() {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerHTML = "Estar feliz em um bom emprego"
  }
  changeText ()

function ToGreen() {
    let Color = document.getElementsByClassName('main-content')[0];
    Color.style.background = "rgb(76,164,109)";
  }
  ToGreen ()

function SquareRedToWhite() {
    let WhiteSquare = document.getElementsByClassName("center-content")[0];
    WhiteSquare.style.background = "white";
  }
  SquareRedToWhite ()

  function FirstH() {
    let eight = document.getElementsByTagName("h1")[0];
    eight.innerText= "New Text";
  }
  FirstH ()

  function Up () {
    let Upper = document.getElementsByTagName("p")[0, 1];
    Upper.innerHTML = Upper.innerHTML.toUpperCase();
  }
  Up ()

  console.log(document.getElementsByTagName("p"))