(async function () {

    // Example with Promises:
    // let products;
    // fetch('products.json') 
    //  .then( response => response.json() )
    //  .then( productsData => {
    //      products = productsData;
    //      showProducts(products, 'original');
    //  });

    // Example 2 - AJAX
    // let products;
    // function getProductsAjax() {
    //     const xhr = new XMLHttpRequest();
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             products = JSON.parse(xhr.responseText);
    //             showProducts();
    //         }
    //     }
    //     xhr.open('GET', 'products.json', true);
    //     xhr.send();
    // }
    // getProductsAjax();

    let order = 'original';
    const response = await fetch('products.json');
    const products = await response.json();
    showProducts();    

    let rates;
    function showProducts() {
        const currency = document.querySelector('.currency').value;
        const sortedProducts = order === 'original' ? products
             : [...products].sort( (a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
        let productsHtml = '';
        for (const product of sortedProducts) {
            productsHtml += `
            <article class="card col-12 col-sm-6 col-md-4 col-lg-3">
            <img src="${product.imgUrl}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <a href="#" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#productInfo">Info</a>
            <a href="#" class="btn btn-primary">${convertCurrency(product.price, currency)} - Buy</a>
            </div>
        </article>`;
        }
        document.querySelector('main .products').innerHTML = productsHtml;
    }

    document.querySelector('.sort-asc').addEventListener('click', sortAsc);

    function sortAsc() {
        order = 'asc';
        showProducts() 
    }

    document.querySelector('.sort-desc').addEventListener('click', sortDesc);
    function sortDesc() {
        order = 'desc';
        showProducts();
    }

    async function getCurrencyRates() {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        rates = await response.json();
        document.querySelector('.currency').disabled = false;
    }

    function convertCurrency(priceUSD, convertTo) {
        if (convertTo === 'USD') return priceUSD;
        return (priceUSD * rates.rates[convertTo]).toFixed(2);
    }

    document.querySelector('.currency').addEventListener('change', showProducts );

    getCurrencyRates();
})();