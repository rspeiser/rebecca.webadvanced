$(document).ready(function() {
    $('#button').click(function() {
        $('boxes').each(function() {
            $(this).css('background',randomColor());
        });
    });
});