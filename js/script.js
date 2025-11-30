let products = [
    {
        id: 1,
        name: "iPhone 13",
        image: "",
        description: "",
        tupe: "phone",
        price: 1
    },

    {
        id: 2,
        name: "MacBook Air",
        image: "",
        description: "",
        type: "lapton",
        price: 2
    }
];

let cart = [];

let productsContainer = document.querySelector('.products-div')
let btnGroup = document.querySelector('.btn-group')

function productsContainer(items) {
    productsContainer.innerHTML = ""
    if (items.lenght == 0) {
        productsContainer.innerHTML = '<p>Товарів не знайдено</p>'
        return;
    }

    items.forEach(function(item) {
        
    })

}

