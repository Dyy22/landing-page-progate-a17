// hamburger menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});
// akhir

// scrolling
window.addEventListener('scroll', function () {
    let header = document.querySelector('nav');

    header.classList.toggle('scrolling', window.scrollY > 0);
});
// akhir