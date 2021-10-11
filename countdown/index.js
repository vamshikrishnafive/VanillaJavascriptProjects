const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
const giveaway = document.querySelector(".givaway");
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline h4");
// giveway text
const tempDate = new Date();
const tempY = tempDate.getFullYear();
const tempM = tempDate.getMonth();
const tempD = tempDate.getDay();
let futureDate = new Date(tempY, tempM, tempD + 20, 11, 30, 0);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekDays[futureDate.getDay()];
const date = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
giveaway.textContent = `Giveaway Ends on ${day}, ${date}, ${month}, ${year}, ${hours}:${minutes}`;
//giveway time
// 1s = 1000ms;
// 1m = 60s;
// 1hr = 60mins;
// 1d = 24hrs;
const futureTime = futureDate.getTime();
function getRemaningTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 100;
    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    const values = [days, hours, minutes, seconds];
    function format(item) {
        if (item < 10) {
            return item = `0${item}`
        }
        return item;
    }
    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
        if (t < 0) {
            clearInterval(countdown)
            deadline.innerHTML = `<h4 class = "expired"> Sorry, this givaway has expired </h4>`
        }
    })
}
let countdown = setInterval(getRemaningTime, 1000);
getRemaningTime();