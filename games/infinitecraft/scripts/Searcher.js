const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("input", function () {
  const searchText = searchBar.value.toLowerCase();
  const sidebar = document.getElementById("sidebar");
  const elements = sidebar.querySelectorAll(".element");
  elements.forEach((element) => {
    const text = element.textContent.toLowerCase();
    if (text.includes(searchText)) {
      element.style.display = "inline-block";
    } else {
      element.style.display = "none";
    }
  });
});