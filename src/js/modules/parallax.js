import simpleParallax from 'simple-parallax-js';

export function jsParallax() {
    let hero = document.querySelectorAll('.prllx-0');
    new simpleParallax(hero, {
        orientation: 'up',
        scale: 1.25,
        overflow: false,
    });

    let kitchen = document.querySelectorAll('.prllx-1');
    new simpleParallax(kitchen, {
        orientation: 'left',
        scale: 1.5,
        overflow: false,
        delay: 1,
    });

    let room = document.querySelectorAll('.prllx-2');
    new simpleParallax(room, {
        orientation: 'right',
        scale: 1.5,
        overflow: false,
        delay: 1,
    });
};