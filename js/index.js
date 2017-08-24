$("#highres-robot").on('load', function() {
    $("#site-wrapper").css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(' + $("#highres-robot").prop('src') + ')');
});