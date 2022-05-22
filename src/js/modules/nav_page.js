export function navigationPage() {
    let navEvent = {};

    navEvent.toggleToActiveLink = (target) => {
        let links = document.querySelectorAll('.__nav-item'),
            showedSection = target.dataset.link;
        links.forEach((link) => {
            if (link.classList.contains('__nav-item-active')) {
                link.classList.remove('__nav-item-active');
            }
        });
        target.classList.add('__nav-item-active');
        scrollToActiveSection(showedSection);
    };

    let scrollToActiveSection = (showedSection) => {
        let section = document.querySelector('.' + showedSection),
            coords = section.getBoundingClientRect(),
            animateTime = 0.0001;
        let timerID = setInterval(() => {
            if (window.scrollY < coords.top) {
                window.scrollBy(0, 10);
            } else {
                clearInterval(timerID);
            }
        }, animateTime || 0.2);
    };

    DARKNESS.navigation = navEvent;
}