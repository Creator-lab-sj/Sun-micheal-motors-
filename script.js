// JavaScript for Smooth Scrolling Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// JavaScript for Sticky Navbar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Optional: Add animation for hero text on page load
document.addEventListener('DOMContentLoaded', function() {
    const heroText = document.querySelector('.hero h1');
    heroText.classList.add('fade-in');
});

// Animation Class for Hero Text
const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
.fade-in {
    opacity: 0;
    transform: translateY(-20px);
    animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(style);