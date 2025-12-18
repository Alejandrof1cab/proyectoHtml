document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#carouselExampleCaptions');
    if (carouselElement) {
        // Initialize Bootstrap Carousel instance
        const carousel = new bootstrap.Carousel(carouselElement);

        // Add click event listener to the carousel inner container
        const carouselInner = carouselElement.querySelector('.carousel-inner');
        if (carouselInner) {
            carouselInner.style.cursor = 'pointer'; // Visual hint that it's clickable
            carouselInner.addEventListener('click', function () {
                carousel.next(); // Advance to next slide
                console.log("Carousel advanced to next slide via click.");
            });
        }
    }
});
