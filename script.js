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
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
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

    // Vet Gallery Slider Logic
    const slides = document.querySelectorAll('.vet-slide');
    const dots = document.querySelectorAll('.vet-dot');

    if (slides.length > 0 && dots.length > 0) {
        let currentSlide = 0;

        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        };

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Auto play (optional, slow 5s)
        setInterval(() => {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }, 5000);
    }
});
