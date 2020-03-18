$(window).scroll(function() {
    var topPos = $(this).scrollTop();

    if (topPos > 100) {
        $("a[href='#top']").css({
            "opacity": "1",
            'cursor': 'pointer'
        });

    } else {
        $("a[href='#top']").css({
            "opacity": "0",
            'cursor': 'default'
        });
    }
})
$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

$("a[href='#form']").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#form").offset().top
    }, 'slow');
});

$('#ham').click(function() {
    $('.r_links').slideToggle();
})