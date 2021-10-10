const colors = ['red', 'green', 'blue', 'orange', 'pink', 'violet', 'yellow', 'grey'];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let randomNumber = getRandomColor();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
};