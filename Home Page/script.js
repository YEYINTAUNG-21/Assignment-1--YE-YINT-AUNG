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
        messageDiv.style.display = 'block'; 
        setTimeout(function() {
            messageDiv.style.display = 'none'; 
        }, 15000);
        emailInput.value = ''; 
    } else {
        alert('Please enter your email.'); 
    }
});
