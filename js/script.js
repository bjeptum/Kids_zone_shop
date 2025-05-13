// Featured Products Data
const featuredProducts = [
    {
        name: "Building Blocks Set",
        price: "KES 2,999",
        image: "images/toy1.jpg",
        description: "Colorful building blocks for endless creativity!"
    },
    {
        name: "Educational Tablet",
        price: "KES 4,799",
        image: "images/toy2.jpg",
        description: "Fun learning games for preschoolers"
    },
    {
        name: "Plush Teddy Bear",
        price: "KES 1,499",
        image: "images/toy3.jpg",
        description: "Soft and cuddly companion for your child"
    },
    {
        name: "Art Supplies Kit",
        price: "KES 3,299",
        image: "images/toy4.jpg",
        description: "Everything your little artist needs"
    },
    {
        name: "Soccer Ball",
        price: "KES 1,199",
        image: "images/toy5.jpg",
        description: "Durable size 4 soccer ball for kids"
    },
    {
        name: "Jump Rope",
        price: "KES 799",
        image: "images/toy6.jpg",
        description: "Colorful jump rope with comfortable handles"
    }
];

// Load featured products on homepage
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
    
    if (productGrid) {
        featuredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" style="width:100%">
                <div style="padding:1rem">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="price"><strong>${product.price}</strong></p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;
            
            productGrid.appendChild(productCard);
        });
    }
    
    // Add click event to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            const productPrice = this.parentElement.querySelector('.price').textContent;
            alert(`Added to cart: ${productName} - ${productPrice}`);
        });
    });
    
    // Form validation for contact page
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Asante! We have received your message and will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Tafadhali jaza sehemu zote.');
            }
        });
    }
});