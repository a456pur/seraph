const mergeRules = {};

// Get the sidebar and canvas elements
const sidebar = document.getElementById("sidebar");
const canvas = document.getElementById("canvas");

// Function to create a draggable clone of an element
function createDraggableClone(element, event) {
  // Clone the element
  const clone = element.cloneNode(true);
  clone.classList.add("element");
  clone.style.position = "absolute";
  canvas.appendChild(clone);

  // Calculate the initial offset of the cursor inside the cloned element
  const offsetX = event.clientX - element.getBoundingClientRect().left;
  const offsetY = event.clientY - element.getBoundingClientRect().top;

  // Move the cloned element with the cursor
  function moveElement(event) {
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    clone.style.left = `${x}px`;
    clone.style.top = `${y}px`;
  }

  // End the drag operation
  function endDrag(event) {
    document.removeEventListener("mousemove", moveElement);
    document.removeEventListener("mouseup", endDrag);

    // Make the clone draggable again
    clone.addEventListener("mousedown", startDrag);
  }

  // Initialize the dragging effect
  moveElement(event);
  document.addEventListener("mousemove", moveElement);
  document.addEventListener("mouseup", endDrag);
}

// Function to start dragging an element within the canvas
function startDrag(event) {
  const element = event.target;
  const offsetX = event.clientX - element.getBoundingClientRect().left;
  const offsetY = event.clientY - element.getBoundingClientRect().top;

  function moveElement(event) {
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  }

  function endDrag(event) {
    document.removeEventListener("mousemove", moveElement);
    document.removeEventListener("mouseup", endDrag);
  }

  moveElement(event);
  document.addEventListener("mousemove", moveElement);
  document.addEventListener("mouseup", endDrag);
}

// Add event listeners to all elements in the sidebar
const elements = document.querySelectorAll(".element");
elements.forEach((element) => {
  element.addEventListener("mousedown", function (event) {
    createDraggableClone(element, event);
  });
});

// Add event listener to allow dragging of elements within the canvas
canvas.addEventListener("mousedown", function (event) {
  const element = event.target;
  if (element.classList.contains("element")) {
    startDrag(event);
  }
});

document.getElementById("clean-button").addEventListener("click", function () {
  document.getElementById("canvas").innerHTML = "";
});