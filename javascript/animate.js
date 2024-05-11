function animateScroll() {
    cancelAnimationFrame(requestId);
    requestId = requestAnimationFrame(step);
}

function step() {
    carouselContainer.scrollLeft += (endScrollX - startScrollX);
    startScrollX = carouselContainer.scrollLeft;
    if (Math.abs(startScrollX - endScrollX) > 1) {
        requestId = requestAnimationFrame(step);
    }
}