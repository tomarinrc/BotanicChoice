$(function() {
    //Sidebar Toggle
    $('a.navbar-mobile-menu').on('click', function(){
        $('.sidebar-overlay').toggleClass('show');
        $('aside').toggleClass('show');
    });
    $('.sidebar-overlay').on('click', function(){
        $('.sidebar-overlay').removeClass('show');
        $('aside').removeClass('show');
    });
});