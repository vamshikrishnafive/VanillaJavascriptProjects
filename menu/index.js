const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.90,
        img: "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/51a9c5b156c84977ae50004b5ef622b2/finalFB.jpg",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque tenetur fugiat quas culpa. Molestias cum laboriosam eius rerum quam nesciunt accusantium aspernatur nulla distinctio alias nisi, hic omnis officia culpa.`
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.90,
        img: "https://i.redd.it/kjvcy0izz4l41.jpg",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eius asperiores sed fugiat, cumque molestiae distinctio neque reiciendis voluptates ipsum soluta, dolores rerum. Veniam quis eum, vel asperiores odio dolore.`
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.90,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odio delectus maxime ut veritatis consequuntur ex assumenda quod quae vel doloribus ipsum nemo dolorem alias enim accusamus, modi at repellat!`
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://countrygirlrestaurant.ca/wp-content/uploads/2014/07/Social-Media-Files_036.jpg",
        description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, aliquam. Sint optio illo repellendus suscipit aliquid nam, ea dicta sequi voluptas debitis quo eveniet veniam sit rerum eum temporibus voluptate.`
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "https://d.newsweek.com/en/full/1364148/eggs-foods-healthy-stock-getty.jpg",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam laudantium voluptatum iure rem voluptates reiciendis maiores sunt magnam, nam animi fugit in adipisci necessitatibus, exercitationem sint maxime! Tempore, facilis distinctio!`
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 6.90,
        img: "https://www.365daysofbakingandmore.com/wp-content/uploads/2014/05/Oreo-Pudding-Dream-Bars-FEATURE.jpg",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odio delectus maxime ut veritatis consequuntur ex assumenda quod quae vel doloribus ipsum nemo dolorem alias enim accusamus, modi at repellat!`
    }
];
const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu)
    displayCategories(menu)
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.description}</p>
        </div>
    </article>`;
    })
    displayMenu = displayMenu.join(" ");
    sectionCenter.innerHTML = displayMenu;
}

function displayCategories(categoryItems) {
    let categories = categoryItems.reduce(function (values, item,) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all'])
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id = ${category}>${category}</button>`
    }).join(" ");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.target.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem
                }
            })
            if (category === 'all') {
                displayMenuItems(menu)
            } else { displayMenuItems(menuCategory) }
        })
    })
}