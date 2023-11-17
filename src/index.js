
document.addEventListener('DOMContentLoaded', function() {

    animateOnLoad();


    function animateOnLoad() {

        anime({
            targets: '.jovenaleman h1',
            rotate: {
                value: 360,
                duration: 750,
                easing: 'easeInOutSine'
            },
            scale: {
                value: [0.5, 1],
                duration: 800,
                easing: 'easeInOutQuad'
            }
        });

        anime({
            targets: '.about-container',
            translateX: [-50, 0],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 200
        });

        anime({
            targets: '.lluvia li',
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 800,
            delay: anime.stagger(100)
        });


    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', function() {
        if (isElementInViewport(document.querySelector('#proyectos'))) {
            anime({
                targets: '.project1',
                translateX: [50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000
            });
    
            anime({
                targets: '.project2',
                translateX: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 1000
            });
        }
    });
});

