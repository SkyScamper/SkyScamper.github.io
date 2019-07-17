$(document).ready(function() {
    $(".HeaderTog").click(function() {
        $(this).parent().nextAll('.toggle-wrap').first().toggle('slow');
    });
});
