// 1. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 2. Dark Mode Toggle
const darkModeBtn = document.getElementById('dark-mode-toggle');
const body = document.body;
const icon = darkModeBtn.querySelector('i');

// Check system preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
}

darkModeBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});

// 3. Simple Slider Logic
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let isAutoPlaying = true;

function autoSlide() {
    if (!isAutoPlaying) return;
    let nextIndex = (Math.round(slider.scrollLeft / slider.clientWidth) + 1) % slides.length;
    slider.scrollTo({
        left: nextIndex * slider.clientWidth,
        behavior: 'smooth'
    });
}

// Jalankan auto slide setiap 4 detik
setInterval(autoSlide, 4000);

// Stop auto slide jika user menyentuh/swipe slider
slider.addEventListener('touchstart', () => isAutoPlaying = false);

// 4. Scroll Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

// 5. Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
