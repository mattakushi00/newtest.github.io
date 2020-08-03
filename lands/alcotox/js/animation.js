(function animation(label, form, stop, imgSick, help) {
    label[0].classList.add('animation-moveTop');
    form[0].classList.add('animation-moveLeft');

    window.addEventListener('scroll', f2, false);

    function f2() {
        var labelTop = window.pageYOffset + label[1].getBoundingClientRect().top, /*получаю верхнюю границу элемента */
            stopTop1 = window.pageYOffset + stop[0].getBoundingClientRect().top,
            stopTop2 = window.pageYOffset + stop[1].getBoundingClientRect().top,
            stopTop3 = window.pageYOffset + stop[2].getBoundingClientRect().top,
            stopTop4 = window.pageYOffset + stop[3].getBoundingClientRect().top,
            img = window.pageYOffset + imgSick[0].getBoundingClientRect().top,
            helpBlock = window.pageYOffset + help[0].getBoundingClientRect().top,
            windowHeight = document.documentElement.clientHeight, /*высота окна */
            visibleBottom = window.pageYOffset + windowHeight - 100; /* нижняя граница окна */
        if (visibleBottom > labelTop) { /*если нижняя граница окна ниже элемента */
            label[0].classList.add('animation-moveTop');
            label[0].style.opacity = '1';
            form[0].classList.add('animation-moveLeft');
            form[0].style.opacity = '1';
            label[1].classList.add('animation-moveTop');
            label[1].style.opacity = '1';
            form[1].classList.add('animation-moveLeft');
            form[1].style.opacity = '1';
        }
        if (visibleBottom > stopTop1) {
            stop[0].classList.add('animation-moveRight');
            stop[0].style.opacity = '1';
        }
        if (visibleBottom > stopTop2) {
            stop[1].classList.add('animation-opacity');
            stop[1].style.opacity = '1';
        }

        if (visibleBottom > stopTop3) {
            stop[2].classList.add('animation-moveRight');
            stop[2].style.opacity = '1';
        }
        if (visibleBottom > stopTop4) {
            stop[3].classList.add('animation-moveLeft');
            stop[3].style.opacity = '1';
        }

        if (visibleBottom > img) {
            imgSick[0].classList.add('animation-opacity');
            imgSick[0].style.opacity = '1';
        }
        if (visibleBottom > helpBlock) {
            help[0].classList.add('animation-moveLeft');
            help[0].style.opacity = '1';
        }

    }

    f2();
})(
    document.getElementsByClassName('product-label'),
    document.getElementsByClassName('order-right'),
    document.getElementsByClassName('stop-item'),
    document.getElementsByClassName('sick-img'),
    document.getElementsByClassName('help-block')
);
