function setSameHeight() {
    const sameHeight = document.getElementsByClassName('sameheight');
    const finalHeight = [];
    for (let i = 0; i < sameHeight.length; i++) {
        finalHeight.push(sameHeight[i].clientHeight)
    }
    finalHeight.sort((a, b) => b - a);

    for (let i = 0; i < sameHeight.length; i++) {
        sameHeight[i].style.height = finalHeight[0] + 'px'
    }
}

jQuery(function ($) {
    setSameHeight()
    $(window).on("orientationchange", function (event) {
        if (event.orientation) {
            setSameHeight()
        }
    });

    if ($('#doclist').length) {
        $('.ir-arriba').click(function () {
            $('body, html').animate({
                scrollTop: $('#doclist').offset().top
            }, 1000);
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > $('#doclist').offset().top + 400) {
                $('a.ir-arriba').fadeIn('slow');
            } else {
                $('a.ir-arriba').fadeOut('slow');
            }
        });
    } else {
        $('a.ir-arriba').click(function () {
            $('body, html').animate({
                scrollTop: '0px'
            }, 1000);
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('a.ir-arriba').fadeIn('slow');
            } else {
                $('a.ir-arriba').fadeOut('slow');
            }
        });
    }
});