function setSameHeight() {
    const sameHeight = document.getElementsByClassName('sameheight');
    const finalHeight = [];
    for (let i = 0; i < sameHeight.length; i++) {
        finalHeight.push(sameHeight[i].clientHeight)
    }
    finalHeight.sort((a, b) => b - a);
    console.log(finalHeight)

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

    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });
});