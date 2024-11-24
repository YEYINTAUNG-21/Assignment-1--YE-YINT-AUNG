let navBar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navBar.classList.toggle('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-icon').onclick = () => {
    cartItem.classList.toggle('active');
}

let searchBar = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick = () => {
    searchBar.classList.toggle('active');
}

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