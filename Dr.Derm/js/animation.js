(function animation() {
    firstBlockHide('order');
    titleHide('h1');
    titleHide('h2');
    hide('order2-left');
    hide('order2-right');
    hide('multi-img');
    hide('multiList-item');
    hide('exacList-item');
    hide('plus-item');
    hide('weekList-item');
    hide('product_fake');
    hide('fake-right');
    hide('mistakesList-item');
    setTimeout(function () {
        simpleAnimation('order-title', 'animation-fadeIn')
    }, 1000);
    simpleAnimation('order-left', 'animation-fadeIn');
    simpleAnimation('order-right', 'animation-moveLeft');
    simpleAnimation('order-product', 'animation-moveRight');

    window.addEventListener('scroll', function () {
        simpleAnimation('effects-title', 'animation-fadeIn');
        simpleAnimation('exac-title', 'animation-fadeIn');
        simpleAnimation('mistake-title', 'animation-fadeIn');
        simpleAnimation('tired-title', 'animation-fadeIn');
        simpleAnimation('order2-title', 'animation-fadeIn');
        simpleAnimation('multi-title', 'animation-fadeIn');
        simpleAnimation('plus-title', 'animation-fadeIn');
        simpleAnimation('weeks-title', 'animation-fadeIn');
        simpleAnimation('spec-title', 'animation-fadeIn');
        simpleAnimation('comment-title', 'animation-fadeIn');
        simpleAnimation('fake-title', 'animation-fadeIn');
        simpleAnimation('order2-left', 'animation-moveRight');
        simpleAnimation('order2-right', 'animation-moveLeft');
        simpleAnimation('product_fake', 'animation-moveLeft');
        simpleAnimation('fake-right', 'animation-fadeIn');
        arrAnime('exacList-item', 'animation-moveRight', 'animation-moveRight');
        arrAnime('multiList-item', 'animation-fadeIn', 'animation-fadeIn');
        arrAnimeTimer('mistakes-list', 'animation-fadeIn');
        arrAnimeTimerReverse('milti-imgs', 'animation-moveRight');
        arrAnimeTimer('plus-items', 'animation-fadeIn');
        arrAnimeTimerReverse('weeks-list', 'animation-fadeIn');
    }, false);


    function simpleAnimation(el, animation, i = 0) {
        var element = document.getElementsByClassName(el)[i],
            elementBorder = window.pageYOffset + element.getBoundingClientRect().top,
            windowHeight = document.documentElement.clientHeight,
            visibleBottom = window.pageYOffset + windowHeight - 200;
        if (visibleBottom > elementBorder) {
            element.classList.add(animation);
            element.style.opacity = '1';
        }
    }

    function firstBlockHide(el) {
        var domEl = document.getElementsByClassName(el),
            arr = [];
        domEl[0].childNodes.forEach(function (element) {
            if (element.nodeName !== '#text') {
                arr.push(element);
                arr.forEach(function (el) {
                    el.style.opacity = '0'
                });
            }
        });
        arr[1].style.opacity = '1';
    }

    function titleHide(el) {
        var domEl = document.getElementsByTagName(el);
        var arr = [];
        for (el of domEl) {
            arr.push(el)
        }
        arr.forEach(function (el) {
            el.style.opacity = '0';
        })
    }

    function arrAnime(arr, animation1, animation2) {
        var element = document.getElementsByClassName(arr);
        for (var i = 0; i < element.length; i++) {
            var elementBorder = window.pageYOffset + element[i].getBoundingClientRect().top,
                windowHeight = document.documentElement.clientHeight,
                visibleBottom = window.pageYOffset + windowHeight - 200;
            if (visibleBottom > elementBorder) {
                if (i % 2 !== 1) {
                    element[i].classList.add(animation1);
                    element[i].style.opacity = '1';
                }
                else {
                    element[i].classList.add(animation2);
                    element[i].style.opacity = '1';
                }
            }
        }
    }

    function arrAnimeTimer(arr, animation) {
        var element = document.getElementsByClassName(arr)[0],
            elementBorder = window.pageYOffset + element.getBoundingClientRect().top,
            windowHeight = document.documentElement.clientHeight,
            visibleBottom = window.pageYOffset + windowHeight - 200,
            arr = [];
        element.childNodes.forEach(function (element) {
            if (element.nodeName !== '#text') {
                arr.push(element);
            }
        });
        if (visibleBottom > elementBorder) {
            for (let i = 0; i < arr.length; i++) {
                setTimeout(function () {
                    arr[i].classList.add(animation);
                    arr[i].style.opacity = '1';
                }, i * 700);
            }
        }
    }

    function arrAnimeTimerReverse(arr, animation) {
        var element = document.getElementsByClassName(arr)[0],
            elementBorder = window.pageYOffset + element.getBoundingClientRect().top,
            windowHeight = document.documentElement.clientHeight,
            visibleBottom = window.pageYOffset + windowHeight - 200,
            arr = [];
        element.childNodes.forEach(function (element) {
            if (element.nodeName !== '#text') {
                arr.push(element);
            }
        });
        if (visibleBottom > elementBorder) {
            console.log(arr.length);
            for (let i = arr.length - 1, j = 0; i >= 0, j < arr.length; i--, j++) {
                setTimeout(function () {
                    arr[i].classList.add(animation);
                    arr[i].style.opacity = '1';
                }, j * 300);
            }
        }
    }

    function hide(arr) {
        var element = document.getElementsByClassName(arr);
        for (var i = 0; i < element.length; i++) {
            element[i].style.opacity = '0';
        }
    }
})();
