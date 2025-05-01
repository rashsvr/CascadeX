// Navbar toggle for mobile
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('hidden');
    navbarMenu.classList.toggle('flex');
    navbarMenu.classList.toggle('flex-col');
    navbarMenu.classList.toggle('absolute');
    navbarMenu.classList.toggle('top-16');
    navbarMenu.classList.toggle('left-0');
    navbarMenu.classList.toggle('w-full');
    navbarMenu.classList.toggle('bg-[#0a192f]');
    navbarMenu.classList.toggle('p-4');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple function to toggle "Read More" text
const readMoreButton = document.getElementById('read-more');
const moreText = document.getElementById('more-text');

readMoreButton.addEventListener('click', () => {
    moreText.classList.toggle('hidden');
    readMoreButton.textContent = moreText.classList.contains('hidden') ? 'Read More' : 'Read Less';
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate sections on scroll
document.querySelectorAll('.animate-section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
});

// Animate hero section elements
gsap.from('#home h1', { opacity: 0, x: -100, duration: 1.2, ease: 'power3.out', delay: 0.3 });
gsap.from('#home p', { opacity: 0, x: -100, duration: 1.2, ease: 'power3.out', delay: 0.5 });
gsap.from('#home .glow-button', { opacity: 0, scale: 0.8, duration: 1, ease: 'back.out(1.7)', delay: 0.7 });
gsap.from('#home dotlottie-player', { opacity: 0, x: 100, duration: 1.2, ease: 'power3.out', delay: 0.9 });