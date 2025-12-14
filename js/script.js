let products = [
    {
        id: 1,
        name: "iPhone 17 Pro Max",
        image: "img/Untied (1).jpg",
        description: "Потужний смартфон з чудовою камерою.",
        type: "phone",
        price: 98000
    },
    {
        id: 2,
        name: "MacBook Air",
        image: "img/Untitled (1).jpg",
        description: "Легкий та швидкий ноутбук для роботи.",
        type: "laptop",
        price: 45000
    },
    {
        id: 3,
        name: "iPhone 15 Pro Max",
        image: "img/Unttgitled (1).jpg",
        description: "",
        type: "phone",
        price: 62999
    },
    {
        id: 4,
        name: "Lenovo ThinkBook",
        image: "img/Untigdtled (1).jpg",
        type: "laptop",
        description: "",
        price: 21999
    },

    {
        id: 5,
        name: "iPhone 16 Pro Max",
        image: "img/Unfdswsatitled (1).jpg",
        type: "phone",
        description: "",
        price: 78999
    },


    {
        id: 6,
        name: "ASUS TUF Gaming F15",
        image: "img/Untihhhtled (1).jpg",
        type: "laptop",
        description: "",
        price: 34999
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

let productsContainer = document.querySelector('.products-div');
let btnGroup = document.querySelector('.btn-group');

function renderProducts(items) {
    productsContainer.innerHTML = ""
    if (items.length == 0) {
        productsContainer.innerHTML = '<p>Товарів не знайдено</p>'
        return;
    }

    items.forEach(function(item) {
        let productHTML = `
            <article class="product">
                <img src="${item.image}" alt="" class="product-img">
                <h3 class="product-title">${item.name}</h3>
                <p class="product-description">${item.description}</p>
                <p class="product-price"><strong>${item.price} грн</strong></p>
                <button type="button" class="btn btn-primary">До кошику</button>
            </article>
        `
        productsContainer.innerHTML += productHTML
    })
}
function applyFilters(categoryType) {
if (categoryType =="all") {
renderProducts(products)
} else {
    let filteredProducts = products.filter(product => product.type == categoryType);
    renderProducts(filteredProducts)

    }
}

function addToCart(productld) {
    let product = products.find(p => p.id == productld);
    if (product) {
        cart.push(product);
        alert("Товар додано" + product.name)
    }
}

let productsMap = {
    "Всі": "all",
    "Телефони": "phone",
    "Комп'ютери": "laptop"
}

function setupFilterButtons() {
    for (let button of btnGroup.children) {
        button.addEventListener("click", function() {
            let category = productsMap[button.innerHTML]
            applyFilters(category)

        })
    }
    productsContainer.addEventListener("click", function(event){
        if (event.target.classlist.contains('add-to-cart-btn')){
            let productCard = event.target.closest('.product');
            let productId = parseInt(productCard.dataset.id)
            addToCart(productId)
        } 
    })
}

renderProducts(products)
setupFilterButtons()
