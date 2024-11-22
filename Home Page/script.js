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
