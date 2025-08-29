const colorButtons = document.querySelectorAll(".sphere");

colorButtons.forEach(button => {
  button.addEventListener("click", () => {
    const color = button.getAttribute("data-color");
    // Apply gradient using chosen color
    document.body.style.background = `linear-gradient(to bottom, white, ${color})`;
  });
});