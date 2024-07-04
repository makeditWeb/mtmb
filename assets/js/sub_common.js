document.addEventListener("DOMContentLoaded", function() {
    const rightFixed = document.querySelector('.right-fixed');
    const footer = document.querySelector('footer.footer.mo');

    if (!rightFixed || !footer) {
        console.error('Either .right-fixed or footer.footer.mo is not found in the DOM.');
        return;
    }

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0 // Trigger when any part of the footer is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            console.log('Intersection entry:', entry);
            if (entry.isIntersecting) {
                // Footer is in view
                console.log('Footer is in view, changing bottom to 24%');
                rightFixed.style.bottom = '24%';
            } else {
                // Footer is out of view
                console.log('Footer is out of view, changing bottom to 10%');
                rightFixed.style.bottom = '10%';
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(footer);
});