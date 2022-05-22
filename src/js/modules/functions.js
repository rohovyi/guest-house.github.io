
import $ from "jquery";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWeb() {
    // Проверка поддержки webp 
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML 
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

/* Collapse */
export function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.__nav-menu_button', '.__nav-menu_lines');
    let links = menu.find('.__nav-item');
    let overlay = menu.find('.__nav_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('__nav_active');

        if (menu.hasClass('__nav_active')) {
            $('body').css('overlow', 'hidden');
        } else {
            $('body').css('overlow', 'visible');
        }
    }
}

burgerMenu('.__nav');