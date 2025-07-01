document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    const products = [
        {
            id: 1,
            name: 'Apple Watch Ultra 2',
            description: 'The ultimate smartwatch for adventure and fitness',
            price_usd: 799,
            price_inr: 89900,
            category: 'wearables',
            image: 'apple-watch-ultra-2.jpg',
            affiliate_link: 'https://example.com/apple-watch-ultra-2'
        },
        {
            id: 2,
            name: 'Samsung Galaxy Watch Ultra',
            description: 'A premium smartwatch with advanced features',
            price_usd: 649.99,
            price_inr: 59999,
            category: 'wearables',
            image: 'samsung-galaxy-watch-ultra.jpg',
            affiliate_link: 'https://example.com/samsung-galaxy-watch-ultra'
        },
        {
            id: 3,
            name: 'OnePlus Watch 3',
            description: 'A stylish smartwatch with long battery life',
            price_usd: 329,
            price_inr: 42999,
            category: 'wearables',
            image: 'oneplus-watch-3.jpg',
            affiliate_link: 'https://example.com/oneplus-watch-3'
        },
        // Add more products for all categories (100 total, 10 per category)
    ];

    let filteredProducts = products;
    if (category) {
        filteredProducts = products.filter(product => product.category === category);
    }

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'col-md-4 product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price_usd} / ₹${product.price_inr}</p>
            <a href="${product.affiliate_link}" target="_blank">Buy Now</a>
        `;
        productList.appendChild(productDiv);
    });

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const productDivs = document.querySelectorAll('.product');
        productDivs.forEach(productDiv => {
            const name = productDiv.querySelector('h3').textContent.toLowerCase();
            if (name.includes(searchTerm)) {
                productDiv.style.display = 'block';
            } else {
                productDiv.style.display = 'none';
            }
        });
    });
});
