document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".cb_carousel-card");

    if (carousels.length > 0) {
        carousels.forEach((carouselContainer) => {
            const carouselWrapper = carouselContainer.closest(".carousel-container");
            if (!carouselWrapper) {
                console.warn("Carousel container não encontrado para um dos carousels.");
                return;
            }

            const leftArrow = carouselWrapper.querySelector(".carousel--arrow-left");
            const rightArrow = carouselWrapper.querySelector(".carousel--arrow-right");

            if (!leftArrow || !rightArrow) {
                console.warn("Setas de navegação não encontradas no carousel:", carouselContainer);
                return;
            }

            // Desktop: Scroll with arrows
            const scrollAmount = 300;
            leftArrow.addEventListener("click", (e) => {
                e.preventDefault();
                carouselContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            });

            rightArrow.addEventListener("click", (e) => {
                e.preventDefault();
                carouselContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });

            // Mobile: Drag-to-scroll
            let isDragging = false;
            let startX, scrollLeft;

            carouselContainer.addEventListener("mousedown", (e) => {
                isDragging = true;
                startX = e.pageX - carouselContainer.offsetLeft;
                scrollLeft = carouselContainer.scrollLeft;
                carouselContainer.classList.add("dragging");
            });

            carouselContainer.addEventListener("mousemove", (e) => {
                if (!isDragging) return;
                e.preventDefault();
                const x = e.pageX - carouselContainer.offsetLeft;
                const walk = (x - startX) * 1; // Adjust scroll speed
                carouselContainer.scrollLeft = scrollLeft - walk;
            });

            carouselContainer.addEventListener("mouseup", () => {
                isDragging = false;
                carouselContainer.classList.remove("dragging");
            });

            carouselContainer.addEventListener("mouseleave", () => {
                isDragging = false;
                carouselContainer.classList.remove("dragging");
            });

            // Desktop: Scroll with mouse wheel
            carouselContainer.addEventListener("wheel", (e) => {
                e.preventDefault();
                carouselContainer.scrollBy({ left: e.deltaY > 0 ? scrollAmount : -scrollAmount });
            });
        });
    } else {
        console.warn("Nenhum elemento .cb_carousel-card encontrado no DOM.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel-style-guide--new-cap");
    const scrollSpeed = 3; // Velocidade do scroll (ajuste conforme necessário)
    let isVisible = false;
    let intervalId;

    function autoScroll() {
        if (!isVisible) return; // Se não estiver visível, não executa

        if (carousel.scrollWidth - carousel.clientWidth <= carousel.scrollLeft) {
            carousel.scrollLeft = 0; // Reinicia o scroll ao atingir o fim
        } else {
            carousel.scrollLeft += scrollSpeed;
        }
    }

    // Observer para detectar visibilidade do carrossel
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            isVisible = entry.isIntersecting;

            if (isVisible) {
                // Inicia o scroll quando o carrossel fica visível
                if (!intervalId) {
                    intervalId = setInterval(autoScroll, 30);
                }
            } else {
                // Para o scroll quando o carrossel sai da tela
                clearInterval(intervalId);
                intervalId = null;
            }
        });
    }, { threshold: 0.2 }); // Executa quando pelo menos 20% do carrossel estiver visível

    observer.observe(carousel);
});
