const buttons = document.querySelectorAll(".btn-container");
const title = document.getElementById("title")
const value = document.getElementById("value")
let count = 0;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const style = e.target.classList;
        if (style.contains('decrease')) {
            count--;
            value.style.color = 'red'
            title.textContent = 'Decreasing'
        } else if (style.contains('increase')) {
            count++;
            value.style.color = 'green'
            title.textContent = 'Increasing'
        } else {
            count = 0;
            value.style.color = 'black'
        }
        value.textContent = count
    })
})
