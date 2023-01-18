//Button functions
//Toggles their respective <div>-elements' backgrounds with the specified color

let buttons = document.querySelectorAll(".btn");

buttons.forEach(p => p.addEventListener("click", () => {
    p.classList.add("pressed");
    toggleColor();
    p.classList.remove("pressed");
}));

function toggleColor() {
    let color = document.querySelector(".pressed").textContent;
    document.getElementById(color.toLowerCase()).classList.toggle(color.toLowerCase());
}