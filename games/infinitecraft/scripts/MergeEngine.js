// Add event listener to the canvas to detect element drops
canvas.addEventListener("mouseup", function (event) {
  const droppedElement = event.target;
  const canvasRect = canvas.getBoundingClientRect();
  const x = event.clientX - canvasRect.left;
  const y = event.clientY - canvasRect.top;

  // Check if the dropped element is an element on the canvas
  if (droppedElement.classList.contains("element")) {
    // Check if the dropped element overlaps with any other element
    const elements = canvas.querySelectorAll(".element");
    elements.forEach((element) => {
      if (
        element !== droppedElement &&
        isOverlapping(droppedElement, element)
      ) {
        // Merge the elements if they can be merged
        const mergedElement = mergeElements(droppedElement, element);
        if (mergedElement) {
          // Remove the original elements
          droppedElement.remove();
          element.remove();
          // Place the merged element at the drop location without snapping
          const mergedElementRect = mergedElement.getBoundingClientRect();
          const offsetX = mergedElementRect.width / 2;
          const offsetY = mergedElementRect.height / 2;
          mergedElement.style.position = "absolute";
          mergedElement.style.left = `${x - offsetX}px`;
          mergedElement.style.top = `${y - offsetY}px`;
          // Add animation
          requestAnimationFrame(() => {
            mergedElement.style.transform = "scale(1.5)";
            mergedElement.style.transition = "transform 0.5s ease";
          });
          // Listen for transition end event
          mergedElement.addEventListener(
            "transitionend",
            function transitionEndHandler() {
              // Remove animation properties after animation is complete
              mergedElement.style.transition = "none";
              mergedElement.style.transform = "scale(1)";
              // Remove event listener
              mergedElement.removeEventListener(
                "transitionend",
                transitionEndHandler
              );
            }
          );
          canvas.appendChild(mergedElement);
        }
      }
    });
  }
});

// Function to check if two elements overlap
function isOverlapping(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

// Function to merge two elements
function mergeElements(element1, element2) {
  const element1Type = element1.id;
  const element2Type = element2.id;

  // Check if merge rule exists for the combination of the two elements
  if (mergeRules[element1Type] && mergeRules[element1Type][element2Type]) {
    const newElementType = mergeRules[element1Type][element2Type];
    // Remove emoji from the merged element type
    const newElementTypeWithoutEmoji = newElementType
      .replace(/[^\x00-\x7F]/g, "")
      .replace(" ", "")
      .toLowerCase(); // Remove non-ASCII characters (emojis)
    // Create a new element representing the merged result
    const mergedElement = document.createElement("div");
    mergedElement.classList.add("element");
    mergedElement.id = newElementTypeWithoutEmoji
      .replace(" ", "")
      .toLowerCase(); // Assign the ID without emoji
    mergedElement.textContent = newElementType;

    // Add the merged element to the sidebar if it doesn't already exist
    const sidebar = document.getElementById("sidebar");
    const elemId = `#${newElementTypeWithoutEmoji
      .replace(" ", "")
      .toLowerCase()}`;
    if (!sidebar.querySelector(elemId)) {
      const newElementDiv = document.createElement("div");
      newElementDiv.classList.add("element");
      newElementDiv.id = newElementTypeWithoutEmoji
        .replace(" ", "")
        .toLowerCase();
      newElementDiv.textContent = newElementType;
      sidebar.appendChild(newElementDiv);

      newElementDiv.addEventListener("mousedown", function (event) {
        createDraggableClone(newElementDiv, event);
      });
    }

    // Return the merged element
    return mergedElement;
  } else if (
    mergeRules[element2Type] &&
    mergeRules[element2Type][element1Type]
  ) {
    const newElementType = mergeRules[element2Type][element1Type];
    // Remove emoji from the merged element type
    const newElementTypeWithoutEmoji = newElementType
      .replace(/[^\x00-\x7F]/g, "")
      .replace(" ", "")
      .toLowerCase(); // Remove non-ASCII characters (emojis)
    // Create a new element representing the merged result
    const mergedElement = document.createElement("div");
    mergedElement.classList.add("element");
    mergedElement.id = newElementTypeWithoutEmoji
      .replace(" ", "")
      .toLowerCase(); // Assign the ID without emoji
    mergedElement.textContent = newElementType;

    // Add the merged element to the sidebar if it doesn't already exist
    const sidebar = document.getElementById("sidebar");
    const elemId = `#${newElementTypeWithoutEmoji
      .replace(" ", "")
      .toLowerCase()}`;
    if (!sidebar.querySelector(elemId)) {
      const newElementDiv = document.createElement("div");
      newElementDiv.classList.add("element");
      newElementDiv.id = newElementTypeWithoutEmoji
        .replace(" ", "")
        .toLowerCase();
      newElementDiv.textContent = newElementType;
      sidebar.appendChild(newElementDiv);

      newElementDiv.addEventListener("mousedown", function (event) {
        createDraggableClone(newElementDiv, event);
      });
    }

    return mergedElement;
  } else {
    // No merge rule exists for the combination of the two elements
    return null;
  }
}