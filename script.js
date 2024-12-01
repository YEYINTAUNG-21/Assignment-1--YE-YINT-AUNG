/* Menu */

let navBar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navBar.classList.toggle('active');
}

/* Cart */

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-icon').onclick = () => {
    cartItem.classList.toggle('active');
}

/* Search */

let searchBar = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick = () => {
    searchBar.classList.toggle('active');
}

/* Slider */

$(document).ready(function(){
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000, 
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

/* Image Section */

function openModal(src, alt) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }
}

/* Subscribe message */

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailInput = document.querySelector('.newsletter-input'); 

    if (emailInput.value !== '') {
        const messageDiv = document.getElementById('subscriptionMessage'); 

        messageDiv.textContent = "Subscription successful! Thank you."; 
        messageDiv.style.display = 'block'; 


        setTimeout(function() {
            messageDiv.style.display = 'none'; 
        }, 5000);

        emailInput.value = ''; 
    } else {
        alert('Please enter your email.'); 
    }
});

// Function to show category //

function showCategory(categoryId) {

    document.querySelectorAll('.menu-grid').forEach(grid => {
        grid.classList.remove('active-category');
    });

    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(categoryId).classList.add('active-category');

    event.target.classList.add('active');
}

// Function to show cart product //

let cartItems = []; 

function addToCart(event) {
    const button = event.target;
    const menuItem = button.closest('.menu-item');

    const item = {
        id: menuItem.dataset.id,
        name: menuItem.querySelector('.product-name').textContent,
        price: parseFloat(menuItem.querySelector('.product-price').textContent.replace('$', '')),
        image: menuItem.querySelector('.product-image').style.backgroundImage.slice(5, -2), // Extract URL from CSS
        quantity: 1
    };

    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
        cartItems.push(item);
    }

    updateCart();
}

function updateCart() {
    const cartContent = document.getElementById('cart-content');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.querySelector('.cart-footer .button');

    cartContent.innerHTML = '';

    if (cartItems.length === 0) {
        cartContent.innerHTML = '<p class="empty-cart">Your cart is empty!</p>';
        totalPriceElement.textContent = 'Total: $0.00';
        checkoutButton.disabled = true;
        return;
    }

    let total = 0;

    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-button decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-button increase" data-id="${item.id}">+</button>
                </div>
            </div>
            <button class="remove-button" data-id="${item.id}">&times;</button>
        `;

        cartContent.appendChild(cartItemDiv);

        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
    checkoutButton.disabled = false;

    document.querySelectorAll('.remove-button').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });

    document.querySelectorAll('.quantity-button').forEach(button => {
        button.addEventListener('click', adjustQuantity);
    });
}

function adjustQuantity(event) {
    const button = event.target;
    const itemId = button.dataset.id;
    const item = cartItems.find(cartItem => cartItem.id === itemId);

    if (button.classList.contains('increase')) {
        item.quantity += 1;
    } else if (button.classList.contains('decrease')) {
        item.quantity -= 1;
        if (item.quantity === 0) {
            cartItems = cartItems.filter(cartItem => cartItem.id !== itemId); // Remove item if quantity is 0
        }
    }

    updateCart();
}

function removeFromCart(event) {
    const itemId = event.target.dataset.id;
    cartItems = cartItems.filter(item => item.id !== itemId);
    updateCart();
}

document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', addToCart);
});


/* Contact section */

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !address || !phone || !message) {
        alert("Please fill out all required fields before submitting.");
        return; 
    }

    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    document.getElementById("contactForm").reset();

    setTimeout(function () {
        successMessage.style.display = "none";
    }, 5000);
});


