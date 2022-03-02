
const $ =document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const products = [{
    "id": 6,
    "title": "Apple iPhone 11",
    "image": "./asset/images/products/iphone/iphone3.jpeg",
    "price": 760,
    "category": "Featured Products"
},

{
    "id": 3,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone2.jpeg",
    "price": 265,
    "category": "Special Products"
},
{
    "id": 4,
    "title": "Apple iPhone 11",
    "image": "./asset/images/products/iphone/iphone2.jpeg",
    "price": 850,
    "category": "Special Products"
},
{
    "id": 8,
    "title": "Apple iPhone 11",
    "image": "./asset/images/products/iphone/iphone4.jpeg",
    "price": 290,
    "category": "Featured Products"
},
{
    "id": 5,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone3.jpeg",
    "price": 250,
    "category": "Special Products"
},

{
    "id": 7,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone4.jpeg",
    "price": 365,
    "category": "Featured Products"
},


{
    "id": 10,
    "title": "Apple iPhone 11 Pro",
    "image": "./asset/images/products/iphone/iphone5.jpeg",
    "price": 385,
    "category": "Special Products"
},
{
    "id": 11,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone6.jpeg",
    "price": 475,
    "category": "Special Products"
},
{
    "id": 13,
    "title": "Apple iPhone 11",
    "image": "./asset/images/products/iphone/iphone6.jpeg",
    "price": 800,
    "category": "Trending Products"
},
{
    "id": 12,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone7.jpeg",
    "price": 850,
    "category": "Special Products"
},

{
    "id": 14,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone7.jpeg",
    "price": 360,
    "category": "Trending Products"
},
{
    "id": 9,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone5.jpeg",
    "price": 320,
    "category": "Special Products"
},
{
    "id": 15,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone8.jpeg",
    "price": 305,
    "category": "Trending Products"
},
{
    "id": 16,
    "title": "Samsung Galaxy",
    "image": "./asset/images/products/sumsung/samsung6.jpeg",
    "price": 400,
    "category": "Special Products"
},
{
    "id": 17,
    "title": "Samsung Galaxy",
    "image": "./asset/images/products/sumsung/samsung5.jpeg",
    "price": 550,
    "category": "Trending Products"
},
{
    "id": 2,
    "title": "Apple iPhone 11",
    "image": "./asset/images/products/iphone/iphone1.jpeg",
    "price": 300,
    "category": "Special Products"
},
{
    "id": 18,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone9.jpeg",
    "price": 630,
    "category": "Trending Products"
},
{
    "id": 20,
    "title": "Samsung Galaxy",
    "image": "./asset/images/products/sumsung/samsung4.jpeg",
    "price": 270,
    "category": "Special Products"
},
{
    "id": 19,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone10.jpeg",
    "price": 250,
    "category": "Trending Products"
},
{
    "id": 1,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone1.jpeg",
    "price": 265,
    "category": "Special Products"
},
{
    "id": 24,
    "title": "Samsung Galaxy",
    "image": "./asset/images/products/sumsung/samsung2.jpeg",
    "price": 500,
    "category": "Featured Products"
},
{
    "id": 21,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone11.jpeg",
    "price": 700,
    "category": "Trending Products"
},

{
    "id": 25,
    "title": "Samsung Galaxy",
    "image": "./asset/images/products/sumsung/samsung1.jpeg",
    "price": 450,
    "category": "Special Products"
},
{
    "id": 22,
    "title": "Samsung Galaxy",
    "image": "./asset/images/products/sumsung/samsung3.jpeg",
    "price": 460,
    "category": "Trending Products"
},
{
    "id": 23,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone12.jpeg",
    "price": 600,
    "category": "Featured Products"
},
{
    "id": 24,
    "title": "Sony WH-CH510",
    "image": "./asset/images/products/headphone/headphone12.jpeg",
    "price": 600,
    "category": "Hot Products"
}

]

const productCategory = $('.product__category')
const productList = $('.product__list')

window.addEventListener('DOMContentLoaded',function() {
    displayMenuItems(products)
    displayCategory()
})

function displayCategory() {
    const categories = products.reduce(function(values, item) {
        if(!values.includes(item.category)) {
            values.push(item.category);
        }
        return values
    },['All Products'])

    const categoryBtn = categories.map(function(category) {
        return `
            <div class="  col l-2-4 m-6 c-12" >
                <li class="filter__btn section__title"  data-id="${category}">
                    <span class="dot"></span>
                    <div class="primary__title">${category}</div>
                </li>
            </div>
        `
    }).join('');
    productCategory.innerHTML = categoryBtn;

    const filterBtns = $$('.filter__btn');
    
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {

            // toggle btn active
            Array.from(filterBtns).filter(function(value) {
                value.classList.remove('active')
            })
            e.currentTarget.classList.add('active')

            // loaded products
            const category = e.currentTarget.dataset.id
            const menuCategory = products.filter(function(menuItem) {
                if(menuItem.category === category) {
                    return menuItem
                }
            })
            if(category === 'All Products'){
                displayMenuItems(products)
            }
            else {
                displayMenuItems(menuCategory)
            }
        })
    })
}


function displayMenuItems(menuItem) {
    let displayMenu = menuItem.map(function(item) {
        return `
        <li class="product col l-3 m-4 c-6">
        <div class="product__header">
            <img src="${item.image}" alt="">
        </div>
        <div class="product__footer">
            <h3 class="product__name">${item.title}</h3>
            <div class="product__rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <div class="product__price">
                <h4>$${item.price}</h4>
            </div>
            <a href="#"><button type="submit" class="product__btn">Add To Cart</button></a>
        </div>
        <ul class="product__utilities">
            <li class="product__utilitie--icon">
                <a href="#" class="product__utilitie--link">
                    <i class="fas fa-eye"></i>
                </a>
            </li>
            <li class="product__utilitie--icon">
                <a href="#" class="product__utilitie--link">
                    <i class="fas fa-heart"></i>
                </a>
            </li>
            <li class="product__utilitie--icon">
                <a href="#" class="product__utilitie--link">
                    <i class="fas fa-sync-alt"></i>
                </a>
            </li>
        </ul>
    </li>
        `
    })
    displayMenu = displayMenu.join('');
    productList.innerHTML = displayMenu
}




