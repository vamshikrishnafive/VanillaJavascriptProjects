const reviews = [
    {
        id: 1,
        name: "susam smith",
        job: "wed developer",
        img: "https://cdn-res.keymedia.com/cms/images/us/026/0222_637049384911763251.JPG",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, suscipit, omnis minus tenetur earum modi minima cumque distinctio aliquid perspiciatis, voluptate vel officiis illum? Ratione quod ex laudantium adipisci itaque!"
    },
    {
        id: 2,
        name: "anna jons",
        job: "developer",
        img: "https://twt-thumbs.washtimes.com/media/img/staff/2017/sally-persons-350_s220x308.jpg?302ab533f75f17d8b5f7b3ebcf774a8e5a91c32f",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A tenetur dicta praesentium ducimus? Accusantium tenetur soluta asperiores repellendus odio distinctio, sequi harum nam, nulla repudiandae officiis vero. Dolore, ab cumque!"
    },
    {
        id: 3,
        name: "smith ani",
        job: "wed",
        img: "https://obgyn.mcw.edu/wp-content/uploads/06242015obgyn-116-Person-Rachael-Web.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat in amet, et consectetur animi recusandae, repellat suscipit id quod excepturi aliquid. Unde quis magni provident cumque minima nulla optio?"
    },
    {
        id: 4,
        name: "vamshi krishna",
        job: "MERN developer",
        img: "https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, deleniti quam. Eos maxime dolorum libero asperiores unde fugit quidem error non? Eius dolor quo harum perspiciatis quos voluptas eveniet! Distinctio."
    }
]

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const leftBtn = document.querySelector(".prev-btn")
const rightBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
})

rightBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

leftBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

randomBtn.addEventListener('click', function () {
    let randomNumber = getRandomInt();
    currentItem = randomNumber
    showPerson();
})

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.text;
}

function getRandomInt() {
    return Math.floor(Math.random() * reviews.length)
}