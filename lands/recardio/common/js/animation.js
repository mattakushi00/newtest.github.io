(function animation(sick, heal, safe, consist, spec, comm, order) {
    for (var i = 0; i < animation.arguments.length; i++) {
        animation.arguments[i][0].style.opacity = '0';
    }
   /* order[1].style.opacity = '0';*/

    hide('sick-item');
    hide('consist-item');
    hide('healItem');

    firstBlock('order-title', 'animation-fadeIn');
    firstBlock('order-left', 'animation-moveRight');
    firstBlock('order-right', 'animation-moveLeft');
    setTimeout(function () {
        firstBlock('order-product', 'animation-fadeIn')
    }, 1000);

    window.addEventListener('scroll', function () {
        arrAnime('sick-item', 'animation-moveLeft', 'animation-moveRight');
        arrAnime('consist-item', 'animation-fadeIn', 'animation-fadeIn');
        simpleAnimation('sick-title', 'animation-fadeIn',0);
        simpleAnimation('healItem', 'animation-moveLeft',1);
        simpleAnimation('healItem', 'animation-moveRight',0);
        simpleAnimation('heal-title', 'animation-fadeIn',0);
        simpleAnimation('safe-title', 'animation-fadeIn',0);
        simpleAnimation('consist-title', 'animation-fadeIn',0);
        simpleAnimation('spec-title', 'animation-fadeIn',0);
        simpleAnimation('comm-title', 'animation-fadeIn',0);
        /*simpleAnimation('order-product', 'animation-fadeIn',1);
        simpleAnimation('order-product', 'animation-fadeIn', 1)*/
    }, false);


    function simpleAnimation(el, animation, i) {
        var element = document.getElementsByClassName(el),
            elementBorder = window.pageYOffset + element[i].getBoundingClientRect().top,
            windowHeight = document.documentElement.clientHeight,
            visibleBottom = window.pageYOffset + windowHeight - 200;
        if (visibleBottom > elementBorder) {
            element[i].classList.add(animation);
            element[i].style.opacity = '1';
        }
    }

    function firstBlock(el, animation) {
        var element = document.getElementsByClassName(el);
        element[0].classList.add(animation);
        element[0].style.opacity = '1';
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

    function hide(arr) {
        var element = document.getElementsByClassName(arr);
        for (var i = 0; i < element.length; i ++) {
            element[i].style.opacity = '0';
        }
    }
})(
    document.getElementsByClassName('sick-title'),
    document.getElementsByClassName('heal-title'),
    document.getElementsByClassName('safe-title'),
    document.getElementsByClassName('consist-title'),
    document.getElementsByClassName('spec-title'),
    document.getElementsByClassName('comm-title'),
    document.getElementsByClassName('order-product')
);
