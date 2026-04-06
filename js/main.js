/**
 * Tricot Facile - Main JavaScript
 * Fonctionnalités communes à toutes les pages
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // Navigation Mobile
    // ============================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Fermer le menu quand on clique en dehors
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // ============================================
    // Navbar au scroll
    // ============================================
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });
    }

    // ============================================
    // Quick Convert on Homepage
    // ============================================
    const quickInches = document.getElementById('quick-inches');
    const quickCm = document.getElementById('quick-cm');

    if (quickInches && quickCm) {
        quickInches.addEventListener('input', (e) => {
            const inches = parseFloat(e.target.value);
            if (!isNaN(inches)) {
                const cm = (inches * 2.54).toFixed(1);
                quickCm.textContent = `${cm} cm`;
            } else {
                quickCm.textContent = '-- cm';
            }
        });
    }

    // ============================================
    // Tabs (générique)
    // ============================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.dataset.tab;

                // Retirer active de tous
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                // Ajouter active au bouton et au contenu
                btn.classList.add('active');
                const content = document.getElementById(`tab-${tabId}`);
                if (content) {
                    content.classList.add('active');
                }
            });
        });
    }

    // ============================================
    // Smooth scroll pour les ancres
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // Animation au scroll (IntersectionObserver)
    // ============================================
    const animateOnScroll = document.querySelectorAll('.feature-card, .resource-card, .about-card');

    if (animateOnScroll.length > 0 && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animateOnScroll.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            observer.observe(el);
        });
    }

    // ============================================
    // File upload styling
    // ============================================
    document.querySelectorAll('.form-file-upload').forEach(upload => {
        const input = upload.querySelector('input[type="file"]');
        if (input) {
            input.addEventListener('change', () => {
                if (input.files.length > 0) {
                    upload.style.borderColor = 'var(--color-sage)';
                    upload.style.background = 'rgba(143, 166, 138, 0.1)';
                }
            });
        }
    });

    // ============================================
    // Console welcome message
    // ============================================
    console.log('%c🧶 Tricot Facile', 'font-size: 24px; font-weight: bold; color: #C67B5C;');
    console.log('%cLa boîte à outils des passionné(e)s de tricot', 'font-size: 14px; color: #8FA68A;');
    // ============================================
    // PWA - Service Worker Registration
    // ============================================
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('SW enregistré avec succès:', registration.scope);
                })
                .catch(error => {
                    console.log('Échec de l\'enregistrement du SW:', error);
                });
        });
    }
});
