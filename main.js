function dropdownMenuDisplayNone() {
  document.querySelectorAll(".dropdown-content-HR").forEach((Element) => {
    Element.style.display = "none";
  });
}

dropdownMenuDisplayNone();

document.querySelectorAll(".dropdown-menu-HR").forEach((Element) => {
  Element.addEventListener("mouseleave", () => {
    Element.lastElementChild.style.display = "none";
  });
  Element.addEventListener("mouseenter", () => {
    dropdownMenuDisplayNone();
    Element.lastElementChild.style.display = "flex";
  });
});
