document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded and DOM ready');

    // Hamburger Menu Logic
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('nav--active');
            navToggle.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav) nav.classList.remove('nav--active');
            if (navToggle) navToggle.classList.remove('active');
        });
    });

    // Header scroll background change
    const updateHeader = () => {
        const header = document.querySelector('.header');
        if (!header) return;

        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        console.log('Scroll position:', scrollPosition);

        if (scrollPosition > 50) {
            header.classList.add('scrolled');
            console.log('Class "scrolled" added');
        } else {
            header.classList.remove('scrolled');
            console.log('Class "scrolled" removed');
        }
    };

    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Run on load

    // Form submission mockup
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const honeypot = contactForm.querySelector('input[name="honeypot"]').value;
            if (honeypot) return;
            alert('Děkujeme za vaši zprávu! Ozveme se vám co nejdříve.');
            contactForm.reset();
        });
    }

    // Parallax
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        const dogs = document.querySelector('.hero__dogs');
        const badge = document.querySelector('.hero__logo-badge');

        // Musíme zachovat translateX(10%), které je v CSS, jinak psi "odskočí" doleva
        if (dogs) {
            dogs.style.transform = `translateX(10%) translateY(calc(5% + 15px + ${scrolled * 0.1}px))`;
        }

        if (badge) {
            badge.style.transform = `translateY(${scrolled * -0.15}px) rotate(${scrolled * 0.05}deg)`;
        }
    });
});
