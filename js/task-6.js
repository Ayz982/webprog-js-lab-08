function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input[type='number']");
const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.margin = "5px";
        boxes.push(box);
        size += 10;
    }

    boxesContainer.append(...boxes);
}

function destroyBoxes() {
    boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
    const amount = parseInt(input.value);

    if (amount >= 1 && amount <= 100) {
        destroyBoxes();
        createBoxes(amount);
        input.value = "";
    } else {
        alert("Please enter a number between 1 and 100");
    }
});

destroyBtn.addEventListener("click", destroyBoxes);
