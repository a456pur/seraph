document.addEventListener('mousemove', (e) => {
    const circleCursor = document.querySelector('.cursor');
    const scrollX = window.scrollX || window.pageXOffset; // Horizontal scroll position
    const scrollY = window.scrollY || window.pageYOffset; // Vertical scroll position

    // Update cursor position, considering scroll position
    circleCursor.style.left = e.clientX + scrollX + 'px';
    circleCursor.style.top = e.clientY + scrollY + 'px';
  });