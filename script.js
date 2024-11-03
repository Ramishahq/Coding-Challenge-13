// Task 1 Fetch Products from the API Using Fetch and Promises

fetch('https://www.course-api.com/javascript-store-products')
.then(response => response.json())
.then(data => displayProducts(data))

//Task 4 Handle Errors Gracefully
.catch(error => {
    console.error("Error fetching data:", error);
    displayError('Failed to load products. Please try again later.');
});
// Task 3 Display Product Details Dynamically

function displayProducts(products) {
const productContainer = document.getElementById('product-container');
products.forEach(product => displayProduct(product, productContainer));
}

function displayProduct(product, container) {
const { name, company, price } = product.fields;
const image = product.fields.image[0].url;
const productPrice = (price / 100).toFixed(2);

const productElement = document.createElement('div');
productElement.classList.add('product');

// Using innerHTML 
productElement.innerHTML = `
    <img src="${image}" alt="${name}">
    <h3>${name}</h3>
    <p>Company: ${company}</p>
    <p>Price: $${productPrice}</p>
`;

container.appendChild(productElement);
}

