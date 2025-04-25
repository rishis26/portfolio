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

// Smooth animation for mode toggle
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
let darkMode = body.classList.contains('light-mode');

// Add transition to body for smooth bg/text color fade
body.style.transition = 'background 0.4s cubic-bezier(.4,2,.6,1), color 0.4s cubic-bezier(.4,2,.6,1)';

modeToggle.addEventListener('click', function() {
    // Animate the icon: scale and rotate
    modeToggle.style.transition = 'transform 0.3s cubic-bezier(.4,2,.6,1)';
    modeToggle.style.transform = 'scale(1.2) rotate(30deg)';
    setTimeout(() => {
        modeToggle.style.transform = '';
    }, 300);

    darkMode = !darkMode;
    body.classList.toggle('light-mode');

    // Swap icon
    modeToggle.innerHTML = darkMode ? "<i class='bx bx-moon'></i>" : "<i class='bx bx-sun'></i>";
});
