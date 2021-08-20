(function() {
  
    const slides = [
        '<img src="img/baby-yoda.svg" alt="Baby Yoda">',
        '<img src="img/girl.svg" alt="Girl">',
        '<img src="img/viking.svg" alt="Girl">'
    ];

    let currentSlideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.carousel-products .slide');
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        showCurrentSlide();
    }

    setInterval(nextSlide, 3000);
    showCurrentSlide();

    document.querySelector('.carousel-products .next-slide')
     .addEventListener('click', nextSlide);

})();