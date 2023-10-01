
  // JavaScript for updating the cursor position
  document.addEventListener('mousemove', (e) => {
    const circleCursor = document.querySelector('.cursor');
    const scrollX = window.scrollX || window.pageXOffset; // Horizontal scroll position
    const scrollY = window.scrollY || window.pageYOffset; // Vertical scroll position

    // Calculate the cursor position, considering scroll position and viewport width
    const cursorX = e.clientX + scrollX;
    const maxCursorX = window.innerWidth - circleCursor.clientWidth; // Maximum cursor X position
    circleCursor.style.left = Math.min(cursorX, maxCursorX) + 'px';
    circleCursor.style.top = e.clientY + scrollY + 'px';
  });
