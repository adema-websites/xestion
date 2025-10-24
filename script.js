// Review data extracted from the image
const reviews = [
    {
        timestamp: "1/23/2024 18:18:35",
        ratings: { delivery: 10, attention: 10, system: 10, value: 10 },
        comment: "lo fuimos mejorando cctdo el proceso de crea",
        instagram: "@bronx.concept",
        business: "Bronx Concept",
        website: "www.bronxconcept.com"
    },
    {
        timestamp: "1/23/2024 18:22:01",
        ratings: { delivery: 10, attention: 10, system: 10, value: 10 },
        comment: "media y la relacion costocion . Son profesion",
        instagram: "Upparnyn",
        business: "Panaderías y Afines de",
        website: "https://upparnyn.com.ar"
    },
    {
        timestamp: "1/23/2024 18:25:52",
        ratings: { delivery: 9, attention: 9, system: 9, value: 9 },
        comment: "un sistema más allá de la gestión de mi contab",
        instagram: "@doncelestino2021",
        business: "Don Celestino",
        website: "https://doncelestino.com.ar"
    },
    {
        timestamp: "1/23/2024 18:32:50",
        ratings: { delivery: 10, attention: 8, system: 9, value: 9 },
        comment: "locación a city center, es lo que nos faltaba",
        instagram: "@citycenterlascanas",
        business: "City Bell",
        website: "www.citycenterlascanas.com"
    },
    {
        timestamp: "1/23/2024 18:35:21",
        ratings: { delivery: 7, attention: 10, system: 9, value: 9 },
        comment: "sto, esperar confirmar las cajas diarias y n",
        instagram: "suministrosroca.uy",
        business: "Suministros ROCA",
        website: "https://suministrosroca.uy"
    },
    {
        timestamp: "1/23/2024 22:04:57",
        ratings: { delivery: 10, attention: 10, system: 10, value: 10 },
        comment: "yudan a ir mejorando el disputos a ayudarte",
        instagram: "perfucasa",
        business: "Perfucasa",
        website: "https://www.perfucasa.com"
    }
];

document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DEL MENÚ MÓVIL (HAMBURGUESA) ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Cambiar el icono de hamburguesa a "X"
            const icon = navToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- LÓGICA DEL FAQ ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // --- CTA BUTTONS: asegurar que abren en nueva pestaña y control simple ---
    const calendlyCTAs = document.querySelectorAll('.cta-calendly');
    calendlyCTAs.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // si es un <a> con href, dejamos que funcione; si no, abrimos el placeholder
            const href = btn.getAttribute('href') || 'https://calendly.com/tu-usuario';
            window.open(href, '_blank', 'noopener');
        });
    });

    const waCTAs = document.querySelectorAll('.cta-whatsapp');
    waCTAs.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const href = btn.getAttribute('href') || 'https://api.whatsapp.com/send?phone=5491157652425';
            window.open(href, '_blank', 'noopener');
        });
    });

    // --- CAROUSEL DE TESTIMONIOS ---
    const track = document.querySelector('.carousel-track');
    const dotsContainer = document.querySelector('.carousel-dots');
    if (track && dotsContainer) {
        let currentIndex = 0;
        const itemWidth = 382; // item width + margin (350 + 32)
        const totalItems = reviews.length * 2; // Duplicate for infinite

        // Duplicate reviews for infinite loop
        const duplicatedReviews = [...reviews, ...reviews];

        // Populate track
        duplicatedReviews.forEach(review => {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.innerHTML = `
                <h3>${review.business}</h3>
                <div class="ratings">
                    <span class="rating">Entrega: ${review.ratings.delivery}</span>
                    <span class="rating">Atención: ${review.ratings.attention}</span>
                    <span class="rating">Sistema: ${review.ratings.system}</span>
                    <span class="rating">Valor: ${review.ratings.value}</span>
                </div>
                <p class="comment">"${review.comment}"</p>
                <p class="business">${review.instagram}</p>
                <a href="${review.website.startsWith('http') ? review.website : 'https://' + review.website}" target="_blank" class="website">${review.website}</a>
            `;
            track.appendChild(item);
        });

        // Set track width
        track.style.width = `${totalItems * itemWidth}px`;

        // Create dots
        for (let i = 0; i < reviews.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });
            dotsContainer.appendChild(dot);
        }

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex++;
            if (currentIndex >= reviews.length) {
                currentIndex = 0;
                track.style.transition = 'none';
                track.style.transform = `translateX(0px)`;
                setTimeout(() => {
                    track.style.transition = 'transform 0.5s ease-in-out';
                    updateCarousel();
                }, 50);
            } else {
                updateCarousel();
            }
        }

        // Auto-scroll every 5 seconds
        setInterval(nextSlide, 5000);

        // Initial update
        updateCarousel();
    }

});