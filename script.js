const switchButton = document.querySelector("#mode-switch");
const body = document.querySelector("body");

switchButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    switchButton.textContent = "Tryb bialy";
  } else {
    switchButton.textContent = "Tryb nocny";
  }
});