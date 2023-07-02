;(function($) {
    console.log('Menu')
    $('#btn-menu').on('click', function() {
        $('#menu-principal').fadeToggle( 'fast', function() {
            $('#menu-principal').toggleClass('show');
            $('#btn-menu').toggleClass('open');
        });
    })
}(jQuery));