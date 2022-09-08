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
});