$(document).ready(function() {

    $(".skills").hide();
    $(".education").hide();
    $("#about-me").addClass("text-white");

    $(document).on('click', '#about-me', function(e) {
        $(".about-me").show();
        $("#about-me").addClass("text-white");
        $("#skills").removeClass("text-white");
        $("#education").removeClass("text-white");
        $('.skills').hide();
        $(".education").hide();

    })
    $(document).on('click', '#skills', function(e) {
        $(".skills").show();
        $("#skills").addClass("text-white");
        $("#about-me").removeClass("text-white");
        $("#education").removeClass("text-white");
        $('.about-me').hide();
        $(".education").hide();

    })
    $(document).on('click', '#education', function(e) {
        $(".education").show();
        $("#education").addClass("text-white");
        $("#skills").removeClass("text-white");
        $("#about-me").removeClass("text-white");
        $('.about-me').hide();
        $(".skills").hide();

    })

    

})