(function($) {


    //Sidebar Toggle
    $('a.navbar-mobile-menu').on('click', function () {
        $('.sidebar-overlay').toggleClass('show');
        $('aside').toggleClass('show');
    });
    $('.sidebar-overlay').on('click', function () {
        $('.sidebar-overlay').removeClass('show');
        $('aside').removeClass('show');
    });

    //Mobile Hero
    var position = 0;
    var hero_position = $('.hero figure').css("left");
    $('.hero figure').on('swipeleft', tinder);

    function tinder() {

        if (hero_position != "400vw") {
            position += 100;
            $('.hero figure').css("left", postion + 'vw');
        }
    }
})(jQuery);