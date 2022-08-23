function buttonClicked(text) {
  const buttonOnClicked = document.getElementById(text);
  const buttonDisplay = buttonOnClicked.innerText;
  return buttonDisplay;
}

let i = 0;
let playersCount = 0;

function getSelectedElement(clickSelected, playerId) {
  let displaySelected = document.createElement("li");
  i += 1;
  console.log(displaySelected, i);
  if (i > 5) {
    alert("You can't add more players.");
  } else {
    playersCount = i;
    displaySelected.innerText = `${i}. ${clickSelected}`;
    displaySelected.classList.add("py-3");
    const finalDisplay = document.getElementById("list");
    finalDisplay.appendChild(displaySelected);
    afterClicked(playerId);
    return displaySelected;
  }
}

function afterClicked(buttonId) {
  let clickButton = document.getElementById(buttonId);
  clickButton.innerText = "Selected";
  clickButton.disabled = true;
  clickButton.classList.add("bg-cyan-700", "text-slate-50");
}

// player buttons event listeners
document.getElementById("player-1").addEventListener("click", function () {
  const clickSelected = buttonClicked("neymar");
  getSelectedElement(clickSelected, "player-1");
});

document.getElementById("player-2").addEventListener("click", function () {
  const clickSelected = buttonClicked("messi");
  getSelectedElement(clickSelected, "player-2");
});
document.getElementById("player-3").addEventListener("click", function () {
  const clickSelected = buttonClicked("ronaldo");
  getSelectedElement(clickSelected, "player-3");
});
document.getElementById("player-4").addEventListener("click", function () {
  const clickSelected = buttonClicked("oreo");
  getSelectedElement(clickSelected, "player-4");
});
document.getElementById("player-5").addEventListener("click", function () {
  const clickSelected = buttonClicked("ozil");
  getSelectedElement(clickSelected, "player-5");
});
document.getElementById("player-6").addEventListener("click", function () {
  const clickSelected = buttonClicked("salah");
  getSelectedElement(clickSelected, "player-6");
});
document.getElementById("player-7").addEventListener("click", function () {
  const clickSelected = buttonClicked("wayne");
  getSelectedElement(clickSelected, "player-7");
});
document.getElementById("player-8").addEventListener("click", function () {
  const clickSelected = buttonClicked("obeuch");
  getSelectedElement(clickSelected, "player-8");
});
document.getElementById("player-9").addEventListener("click", function () {
  const clickSelected = buttonClicked("alberto");
  getSelectedElement(clickSelected, "player-9");
});
