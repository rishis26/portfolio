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
