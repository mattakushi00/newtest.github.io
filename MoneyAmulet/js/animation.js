(function animation(order) {
    order[0].classList.add('animation-moveTop');

    window.addEventListener('scroll', f2, false);

    function f2() {
        var orderTop = window.pageYOffset + order[1].getBoundingClientRect().top, /*получаю верхнюю границу элемента */
            windowHeight = document.documentElement.clientHeight, /*высота окна */
            visibleBottom = window.pageYOffset + windowHeight - 100; /* нижняя граница окна */
        if (visibleBottom > orderTop) { /*если нижняя граница окна ниже элемента */
            order[0].classList.add('animation-moveTop');
            order[0].style.opacity = '1';
            order[1].classList.add('animation-moveTop');
            order[1].style.opacity = '1';
        }

    }
    f2();
})(
    document.getElementsByClassName('order-product')
);
