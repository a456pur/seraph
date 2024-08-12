const Counter = document.createElement("div");
let uniqueElements = new Set();

function loadElements() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      Object.values(data).forEach((merges) => {
        Object.values(merges).forEach((element) => {
          uniqueElements.add(element);
        });
      });
    });
}

function monitorElements() {
  const checkElements = setInterval(() => {
    const uniqueElementsSize = uniqueElements.size;
    const sitebarElements =
      document.getElementById("sidebar").childElementCount - 1;
    Counter.innerText = `${sitebarElements}/${uniqueElementsSize}`;
  }, 200);
}

function Completionist() {
  loadElements();
  setTimeout(monitorElements, 50);

  const GameContainer = document.getElementById("game-container");

  Counter.id = "game-icon";
  Counter.style.marginTop = "50px";

  GameContainer.append(Counter);
}