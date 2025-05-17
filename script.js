document.getElementById("read-more-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const moreText = document.getElementById("more-text");
    const btn = e.target;

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        btn.textContent = "Read less";
    } else {
        moreText.style.display = "none";
        btn.textContent = "Read more";
    }
});

// Toggle menu for responsive navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

// Theme switching functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set default theme to light unless user has a saved preference
const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.className = currentTheme === 'dark' ? 'bx bx-sun theme-toggle' : 'bx bx-moon theme-toggle';

themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.className = newTheme === 'dark' ? 'bx bx-sun theme-toggle' : 'bx bx-moon theme-toggle';
});

// Shrinking header on scroll
const header = document.querySelector('.header');
let ticking = false;
let isShrunk = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const shouldShrink = window.scrollY > 10;
            if (shouldShrink !== isShrunk) {
                header.classList.toggle('header--shrink', shouldShrink);
                isShrunk = shouldShrink;
            }
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });
