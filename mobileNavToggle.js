window.addEventListener('DOMContentLoaded', () => {
    let menuButton = document.querySelector('#mobile-menu-btn');
    let closeButton = document.querySelector('#mobile-close-btn');
    let mobileNav = document.querySelector('#mobile-nav');

    menuButton.addEventListener('click', () => {
        mobileNav.classList.remove('hidden');
        mobileNav.classList.add('absolute');
    });

    closeButton.addEventListener('click', () => {
        mobileNav.classList.remove('absolute');
        mobileNav.classList.add('hidden');
    });
});