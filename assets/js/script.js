// Handle the scroll behaviour for the circle header

window.addEventListener('scroll', function() {
    const circleHeader = document.getElementById('circleHeader');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        circleHeader.style.position = 'absolute';
        circleHeader.style.top = scrollPosition + 'px';
    } else {
        circleHeader.style.position = 'initial';
    }
});