const testimonials = [
    {
        business: "Bronx Concept",
        instagram: "@bronx.concept",
        website: "https://www.bronxconcept.com.ar/",
        score: "10/10",
        text: "Excelente servicio. Super personalizado. Nos acompanaron todo el proceso de creacion y siempre atentos a crear un programa a nuestra medida."
    },
    {
        business: "Don Celestino",
        instagram: "@doncelestino2021",
        website: "https://doncelestino.com.ar/",
        score: "9/10",
        text: "Realizan sistemas a tu medida. Me ayudaron con la gestion de la contabilidad y la organizacion de las cuentas corrientes."
    },
    {
        business: "City Cell",
        instagram: "@citycell.rafaela",
        website: "https://www.instagram.com/citycell.rafaela/",
        score: "8/10",
        text: "Muy bueno el sistema, ideal para emprendedores que no les gusta lo enlatado y quieren algo realmente adaptado."
    },
    {
        business: "Suministros ROCA",
        instagram: "@suministrosroca.uy",
        website: "https://suministrosroca.uy/",
        score: "9/10",
        text: "Nos ayudaron a controlar stock, organizar cajas diarias y armar reportes claros de la situacion del negocio."
    },
    {
        business: "PerfuCasa",
        instagram: "@perfucasa",
        website: "https://www.perfucasa.com/",
        score: "10/10",
        text: "Excelente calidad de servicio, siempre atentos y dispuestos a ayudar para lograr el mejor resultado final."
    },
    {
        business: "RC Distribuidora",
        instagram: "@distribuidorarc_laplata",
        website: "https://www.instagram.com/distribuidorarc_laplata/",
        score: "10/10",
        text: "Crearon un sistema de gestion adaptado a mi necesidad, facil de usar y con planes de financiacion para emprendedores."
    },
    {
        business: "AR Maquinas",
        instagram: "@armaquinas.rafaela",
        website: "https://www.instagram.com/armaquinas.rafaela/",
        score: "8/10",
        text: "Desarrollamos un sistema desde cero con muchisimas funciones y estuvieron a la altura de las expectativas y exigencias."
    },
    {
        business: "La Stampa",
        instagram: "sin instagram",
        website: "",
        score: "10/10",
        text: "Quede mas que conforme. Supo interpretar necesidades y buscar soluciones practicas y eficientes para cada requerimiento."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    setupFaq();
    setupTestimonials();
    setupRevealAnimations();
    duplicateClientLogos();
});

function setupMenu() {
    const button = document.getElementById("menuButton");
    const nav = document.getElementById("mainNav");
    if (!button || !nav) {
        return;
    }

    button.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            button.setAttribute("aria-expanded", "false");
        });
    });
}

function setupFaq() {
    document.querySelectorAll(".faq-question").forEach((questionButton) => {
        questionButton.addEventListener("click", () => {
            const item = questionButton.closest(".faq-item");
            if (!item) {
                return;
            }
            item.classList.toggle("is-open");
        });
    });
}

function setupTestimonials() {
    const track = document.getElementById("testimonialTrack");
    const dots = document.getElementById("testimonialDots");
    if (!track || !dots) {
        return;
    }

    testimonials.forEach((testimonial, index) => {
        const card = document.createElement("article");
        card.className = "testimonial-card";
        card.innerHTML = `
            <h3>${testimonial.business}</h3>
            <p class="testimonial-score">Valoracion: ${testimonial.score}</p>
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="testimonial-source">${testimonial.instagram}</p>
            ${testimonial.website ? `<a class="testimonial-source" href="${testimonial.website}" target="_blank" rel="noopener">${testimonial.website}</a>` : ""}
        `;
        track.appendChild(card);

        const dot = document.createElement("button");
        dot.className = "testimonial-dot";
        dot.type = "button";
        dot.setAttribute("aria-label", `Ir al testimonio ${index + 1}`);
        dots.appendChild(dot);
    });

    let current = 0;
    const dotNodes = Array.from(document.querySelectorAll(".testimonial-dot"));

    function cardsVisible() {
        if (window.innerWidth >= 1040) {
            return 3;
        }
        if (window.innerWidth >= 720) {
            return 2;
        }
        return 1;
    }

    function maxStartIndex() {
        return Math.max(0, testimonials.length - cardsVisible());
    }

    function renderSlider() {
        current = Math.min(current, maxStartIndex());
        const card = track.querySelector(".testimonial-card");
        if (!card) {
            return;
        }
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.columnGap || style.gap || "0") || 0;
        const slideX = (card.offsetWidth + gap) * current;
        track.style.transform = `translateX(-${slideX}px)`;

        dotNodes.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === current);
            dot.disabled = idx > maxStartIndex();
        });
    }

    dotNodes.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            if (index <= maxStartIndex()) {
                current = index;
                renderSlider();
            }
        });
    });

    window.addEventListener("resize", renderSlider);

    setInterval(() => {
        const limit = maxStartIndex();
        current = current >= limit ? 0 : current + 1;
        renderSlider();
    }, 5000);

    renderSlider();
}

function setupRevealAnimations() {
    const revealNodes = document.querySelectorAll(".reveal");
    if (!revealNodes.length) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealNodes.forEach((node) => observer.observe(node));
}

function duplicateClientLogos() {
    const track = document.querySelector(".logo-track");
    if (!track) {
        return;
    }

    // Duplicate logos once to keep the marquee smooth.
    track.innerHTML += track.innerHTML;
}