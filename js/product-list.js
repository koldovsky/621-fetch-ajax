(function () {
    const productsJson = `[
        {
            "id": "1",
            "name": "Baby Yoda",
            "description": "Lorem ipsum...",
            "price": 9.99,
            "imgUrl": "img/baby-yoda.svg"            
        },
        {
            "id": "2",
            "name": "Banana",
            "description": "Lorem ipsum...",
            "price": 8.99,
            "imgUrl": "img/banana.svg"            
        },
        {
            "id": "3",
            "name": "Girl",
            "description": "Lorem ipsum...",
            "price": 7.99,
            "imgUrl": "img/girl.svg"            
        },
        {
            "id": "4",
            "name": "Viking",
            "description": "Lorem ipsum...",
            "price": 6.99,
            "imgUrl": "img/viking.svg"            
        },
        {
            "id": "5",
            "name": "Cat",
            "description": "Lorem ipsum...",
            "price": 8.99,
            "imgUrl": "https://placekitten.com/200/139"            
        }
    ]`; 

    const products = JSON.parse(productsJson);

    function showProducts(products, order) {
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
            <a href="#" class="btn btn-primary">${product.price} - Buy</a>
            </div>
        </article>`;
        }
        document.querySelector('main .products').innerHTML = productsHtml;
    }
    showProducts(products, 'original') 

    document.querySelector('.sort-asc').addEventListener('click', sortAsc);
    function sortAsc() {
        showProducts(products, 'asc') 
    }

    document.querySelector('.sort-desc').addEventListener('click', sortDesc);
    function sortDesc() {
        showProducts(products, 'desc') 
    }

})();