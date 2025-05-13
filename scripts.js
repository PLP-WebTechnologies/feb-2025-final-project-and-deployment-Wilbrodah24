// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    document.querySelectorAll('#cart-count').forEach(el => {
        el.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Product filter
document.getElementById('price-filter').addEventListener('change', (e) => {
    const maxPrice = parseInt(e.target.value);
    filterProducts(maxPrice);
});

function filterProducts(maxPrice) {
    const filtered = maxPrice ? products.filter(p => p.price <= maxPrice) : products;
    renderProducts(filtered);
}