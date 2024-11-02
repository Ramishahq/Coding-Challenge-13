//Task 2
// Task 2: Fetch Products from the API Using Fetch and Promises
const productContainer = document.getElementById("product-container");

// Fetching data from the API

fetch('https://www.course-api.com/javascript-store-products') 
    .then(response => {
        if (!response.ok) {
            throw new Error("No response");
        }
        return response.json();
    })
    .then(products => {
        displayProducts(products);
    })
    .catch()