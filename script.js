
// variaveis, array e objetos

const products = [
    {
        id: 1,
        title: "Bíblia de Estudo Pentecostal Harpa cristã - Almeida Revista e Corrigida (ARC) ",
        price: 190.00,
        discount: 15,
        image: "https://m.media-amazon.com/images/I/61QifjvIOlL._SY342_.jpg"
    },
    {
        id: 2,
        title: "Bíblia King James 1611 de Estudo Holman - Duotone - 7° Edição",
        price: 204,
        discount: 48,
        image: "https://m.media-amazon.com/images/I/716VmVIXEsL._SY342_.jpg"
    },
    {
        id: 3,
        title: "Bíblia de Estudos e sermões de C.H. Spurgeon - Capa luxo",
        price: 199.90,
        discount: 49,
        image: "https://m.media-amazon.com/images/I/71-tXe1RyML._SY342_.jpg"
    },
    {
        id: 4,
        title: "Bíblia de Estudo Explicada Média Luxo Vinho",
        price: 150.00,
        discount: 15,
        image: "https://m.media-amazon.com/images/I/51j9n8-NIlL._SY342_.jpg"
    },
    {
        id: 5,
        title: "Bíblia de Estudo Plenitude: Almeida Revista e Corrigida (ARC) ",
        price: 189.99,
        discount: 20,
        image: "https://m.media-amazon.com/images/I/91pHw+EnHKL._SY342_.jpg"
    },
    {
        id: 5,
        title: "Bíblia Pregador Pentecostal | SBB | Almeida Revista e Corrigida (ARC) ",
        price: 214.00,
        discount: 8,
        image: "https://m.media-amazon.com/images/I/71LEKdtcXlL._SY342_.jpg"
    },
    {
        id: 5,
        title: "A Bíblia da Mulher ARC Nova Edição: Almeida Revista e Corrigida (ARC) ",
        price: 210.00,
        discount: 31,
        image: "https://m.media-amazon.com/images/I/81ItEwZQVOL._SY342_.jpg"
    },
    {
        id: 5,
        title: "Bíblia do Obreiro ARC: Almeida Revista e Corrigida (ARC) ",
        price: 96.00,
        discount: 32,
        image: "https://m.media-amazon.com/images/I/81vOgKPi1XL._SY342_.jpg"
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

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase()

    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchInput))

    renderProduct(filteredProducts)
}



document.addEventListener('DOMContentLoaded', () => {
    renderProduct(products)

    document.getElementById('searchBtn').addEventListener('click', searchProducts)
    // addEventListener -> escutador de eventos. Vai ficar esperando o evento click acontecer
})
