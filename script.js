let cart = [];

// Function to add items to cart
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    alert(`${name} has been added to your cart!`);
    updateCartCount();
}

// Function to update cart widget
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;

    if (document.getElementById('cart-items') !== null) {
        loadCartItems();
    }
}

// Function to load cart items in cart.html
function loadCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceDiv = document.getElementById('total-price');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty!</p>';
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `<p>${item.name} - KES ${item.price}</p>`;
            cartItemsDiv.appendChild(itemDiv);
            total += item.price;
        });
        totalPriceDiv.innerHTML = `<h3>Total Price: KES ${total}</h3>`;
    }
}

// Checkout function
function checkout() {
    if (cart.length > 0) {
        alert('Proceeding to checkout...');
        // Here, in a real app, you would usually redirect to a payment page or perform 
        // a payment action. For this demo, let's just clear the cart after 'checkout'.
        cart = [];
        updateCartCount();
        loadCartItems();
    } else {
        alert('Your cart is empty. Add items to cart before checkout.');
    }
}

// If loading the cart page, load cart items
window.onload = function() {
    updateCartCount();

    if (document.getElementById('cart-items') !== null) {
        loadCartItems();
    }
};