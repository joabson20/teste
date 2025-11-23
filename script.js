
// variaveis, array e objetos

const products = [
    {
        id: 1,
        title: "Bíblia Sagrada| harpa cristã",
        price: 40.00,
        discount: 15,
        image: "https://th.bing.com/th/id/OIP.QThX4wkaF64-4eSlNbE9QgHaHa?w=220&h=220&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
        id:2,
        title: "Bíblia Sagrada| harpa cristã",
        price: 40.00,
        discount: 15,
        image: "https://th.bing.com/th/id/OIP.QThX4wkaF64-4eSlNbE9QgHaHa?w=220&h=220&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
        id: 3,
        title: "Bíblia Sagrada| harpa cristã",
        price: 40.00,
        discount: 15,
        image: "https://th.bing.com/th/id/OIP.QThX4wkaF64-4eSlNbE9QgHaHa?w=220&h=220&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
        id: 4,
        title: "Bíblia Sagrada| harpa cristã",
        price: 40.00,
        discount: 15,
        image: "https://th.bing.com/th/id/OIP.QThX4wkaF64-4eSlNbE9QgHaHa?w=220&h=220&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
        id: 5,
        title: "Bíblia Sagrada| harpa cristã",
        price: 40.00,
        discount: 15,
        image: "https://th.bing.com/th/id/OIP.QThX4wkaF64-4eSlNbE9QgHaHa?w=220&h=220&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
        id: 6,
        title: "Bíblia Sagrada| harpa cristã",
        price: 40.00,
        discount: 15,
        image: "https://th.bing.com/th/id/OIP.QThX4wkaF64-4eSlNbE9QgHaHa?w=220&h=220&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
        id: 7,
        title: "Bíblia Sagrada| harpa cristã",
        price: 40.00,
        discount: 15,
        image: "https://th.bing.com/th/id/OIP.QThX4wkaF64-4eSlNbE9QgHaHa?w=220&h=220&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    {
        id: 8,
        title: "Bíblia Sagrada| harpa cristã",
        price: 40.00,
        discount: 15,
        image: "https://th.bing.com/th/id/OIP.QThX4wkaF64-4eSlNbE9QgHaHa?w=220&h=220&c=7&r=0&o=7&pid=1.7&rm=3"
    },
    
];

function formatPrice(price) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}


function createProductCard(product) {

    return `
             <div class="product-card">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-discount">${product.discount}% OFF</div>
                </div>
    `
}

function renderProduct(products) {
    const grid = document.getElementById('productsGrid')

    grid.innerHTML = products.map(createProductCard).join('')

    // join -> juntar todo mundo
    // innerHTML -> injetar, colocar algo no HTML
    // map -> mapeia, percorre o array, pegando produto por produto
}

function searchProducts(){
   const searchInput = document.getElementById('searchInput').value.toLowerCase()

   const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchInput))

    renderProduct(filteredProducts)
}



document.addEventListener('DOMContentLoaded', () => {
    renderProduct(products)

    document.getElementById('searchBtn').addEventListener('click', searchProducts)
    // addEventListener -> escutador de eventos. Vai ficar esperando o evento click acontecer
})
