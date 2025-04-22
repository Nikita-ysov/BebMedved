 let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        const slidesContainer = document.querySelector('.slides');
        slidesContainer.style.transform = 'translateX(' + (-index * 100) + '%)';
        updateIndicator(index);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    function updateIndicator(index) {
        const indicator = document.getElementById('indicator');
        indicator.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.className = (i === index) ? 'active' : '';
            dot.onclick = () => showSlide(i);
            indicator.appendChild(dot);
        }
    }

    // Инициализация индикатора
    updateIndicator(currentSlide);