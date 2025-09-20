const textElement = document.getElementById("text");
const button = document.getElementById("changeTextButton");

button.addEventListener("click", () => {
    textElement.textContent = "You clicked the button!";
});
