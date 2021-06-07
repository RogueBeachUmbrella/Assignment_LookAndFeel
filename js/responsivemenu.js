$(function () {
    var menuVisible = false;
    $('.navbar-togglermenuBtn').click(function () {
        if (menuVisible) {
            $('.navbar-collapse').css({ 'display': 'none' });
            menuVisible = false;
            return;
        }
        $('.navbar-collapse').css({ 'display': 'block' });
        menuVisible = true;
    });
    $('.navbar-collapse').click(function () {
        $(this).css({ 'display': 'none' });
        menuVisible = false;
    });
});