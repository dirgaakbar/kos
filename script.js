// Navbar Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
});

// Dark Mode
const btn = document.getElementById('dark-mode-toggle');
btn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    btn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// Auto Slider
const slider = document.querySelector('.slider');
setInterval(() => {
    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
    } else {
        slider.scrollLeft += slider.clientWidth;
    }
}, 4000);

// Intersection Observer for Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('appear');
    });
});
document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
