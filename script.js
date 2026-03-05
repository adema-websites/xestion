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

const systemsCatalog = {
    ventas: {
        title: "Sistema de ventas en Excel",
        description:
            "Gestiona ventas, clientes, comprobantes, cuentas por cobrar y reportes comerciales en un unico flujo.",
        features: [
            "Carga de ventas en segundos con validaciones",
            "Historial de clientes y seguimiento de cobranzas",
            "Comprobantes listos para imprimir o exportar",
            "Reportes de ventas por fecha, vendedor y producto",
            "Alertas de saldos pendientes"
        ],
        sectors: [
            "Comercios minoristas",
            "Distribuidoras",
            "Mayoristas",
            "Servicios con facturacion recurrente"
        ],
        images: [
            "Imagenes sistemas/Form nueva venta.png",
            "Imagenes sistemas/Impresion venta.png",
            "Imagenes sistemas/creacion de pedido.png",
            "Imagenes sistemas/Foto menu.png"
        ]
    },
    caja: {
        title: "Sistema de caja y movimientos",
        description:
            "Controla ingresos, egresos, cierres de caja y flujo de fondos diario con total trazabilidad operativa.",
        features: [
            "Registro de movimientos por categoria",
            "Arqueo y cierre de caja diario",
            "Conciliacion simple de movimientos",
            "Reportes de caja por periodo y responsable",
            "Control de desvio y gastos extraordinarios"
        ],
        sectors: [
            "Gastronomia",
            "Locales comerciales",
            "Servicios tecnicos",
            "Pymes con alta rotacion diaria"
        ],
        images: [
            "Imagenes sistemas/carga de pagos.png",
            "Imagenes sistemas/cc clientes.png",
            "Imagenes sistemas/interfaz.jpg",
            "Imagenes sistemas/reporteroca.jpg"
        ]
    },
    stock: {
        title: "Sistema de stock e inventario",
        description:
            "Mantiene inventario actualizado en tiempo real para mejorar compras, evitar faltantes y reducir sobrestock.",
        features: [
            "Altas, bajas y ajustes de inventario",
            "Control de stock minimo y reposicion",
            "Listado de productos con filtros avanzados",
            "Trazabilidad de movimientos de mercaderia",
            "Reportes de rotacion y valuacion"
        ],
        sectors: [
            "Ferreterias",
            "Corralones",
            "Tiendas de indumentaria",
            "Empresas de insumos"
        ],
        images: [
            "Imagenes sistemas/listado de productos.png",
            "Imagenes sistemas/cc clientes.png",
            "Imagenes sistemas/Copia de REPORTE_AGRO.jpg",
            "Imagenes sistemas/Foto menu.png"
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
    setupFaq();
    setupTestimonials();
    setupSystemModal();
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

function setupSystemModal() {
    const modal = document.getElementById("systemModal");
    const closeButton = document.getElementById("systemModalClose");
    const cards = document.querySelectorAll(".product-card[data-system-id]");
    const mainImage = document.getElementById("systemModalMainImage");
    const thumbs = document.getElementById("systemModalThumbs");
    const title = document.getElementById("systemModalTitle");
    const description = document.getElementById("systemModalDescription");
    const features = document.getElementById("systemModalFeatures");
    const sectors = document.getElementById("systemModalSectors");
    const prevButton = document.getElementById("systemModalPrev");
    const nextButton = document.getElementById("systemModalNext");

    let currentImages = [];
    let currentImageIndex = 0;

    if (!modal || !closeButton || !cards.length) {
        return;
    }

    function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
    }

    function updateMainImage() {
        if (!mainImage || !currentImages.length) {
            return;
        }

        mainImage.src = currentImages[currentImageIndex];
        mainImage.alt = `Captura ${currentImageIndex + 1} del sistema`;

        document
            .querySelectorAll(".system-modal__thumb")
            .forEach((thumb, idx) => thumb.classList.toggle("is-active", idx === currentImageIndex));
    }

    function goToImage(index) {
        if (!currentImages.length) {
            return;
        }
        currentImageIndex = (index + currentImages.length) % currentImages.length;
        updateMainImage();
    }

    function renderImageGallery(images) {
        if (!mainImage || !thumbs || !images.length) {
            return;
        }

        currentImages = images;
        currentImageIndex = 0;

        updateMainImage();
        thumbs.innerHTML = "";

        images.forEach((imagePath, index) => {
            const thumbButton = document.createElement("button");
            thumbButton.type = "button";
            thumbButton.className = "system-modal__thumb";
            if (index === 0) {
                thumbButton.classList.add("is-active");
            }

            thumbButton.innerHTML = `<img src="${imagePath}" alt="Captura ${index + 1} del sistema">`;
            thumbButton.addEventListener("click", () => {
                goToImage(index);
            });

            thumbs.appendChild(thumbButton);
        });
    }

    function fillList(listNode, items) {
        if (!listNode) {
            return;
        }
        listNode.innerHTML = "";
        items.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            listNode.appendChild(li);
        });
    }

    function openModal(systemId) {
        const system = systemsCatalog[systemId];
        if (!system) {
            return;
        }

        if (title) {
            title.textContent = system.title;
        }
        if (description) {
            description.textContent = system.description;
        }

        fillList(features, system.features);
        fillList(sectors, system.sectors);
        renderImageGallery(system.images);

        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
    }

    cards.forEach((card) => {
        const systemId = card.dataset.systemId;
        const actionButton = card.querySelector(".product-open");

        if (actionButton) {
            actionButton.addEventListener("click", (event) => {
                event.stopPropagation();
                openModal(systemId);
            });
        }

        card.addEventListener("click", () => openModal(systemId));

        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openModal(systemId);
            }
        });
    });

    modal.addEventListener("click", (event) => {
        const target = event.target;
        if (target instanceof HTMLElement && target.dataset.modalClose === "true") {
            closeModal();
        }
    });

    closeButton.addEventListener("click", closeModal);

    if (prevButton) {
        prevButton.addEventListener("click", () => goToImage(currentImageIndex - 1));
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => goToImage(currentImageIndex + 1));
    }

    document.addEventListener("keydown", (event) => {
        if (!modal.classList.contains("is-open")) {
            return;
        }

        if (event.key === "Escape") {
            closeModal();
        }

        if (event.key === "ArrowLeft") {
            goToImage(currentImageIndex - 1);
        }

        if (event.key === "ArrowRight") {
            goToImage(currentImageIndex + 1);
        }
    });
}