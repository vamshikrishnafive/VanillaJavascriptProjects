const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let randomNumber = '#';
    for (let index = 0; index < 6; index++) {
        randomNumber += colors[getRandomColor()];
    }
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
};