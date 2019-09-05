$(window).scroll(function () {
    if ($(window).scrollTop() > 20) {
        $(".im").addClass("blur");
    } else {
        $(".im").removeClass("blur");
    }
});