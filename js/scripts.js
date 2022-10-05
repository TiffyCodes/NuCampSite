$(function() {
    $(".carousel").carousel( { interval: 2000 });
        // If click pause will pause using fx below
        $("#carouselButton").click(function(){
            $(".carousel").carousel("pause");
            if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                $(".carousel").carousel("pause");
                $("#carouselButton").children("i").removeClass("fa-pause");
                $("#carouselButton").children("i").addClass("fa-play");
            } else {
                $(".carousel").carousel("cycle");
                $("#carouselButton").children("i").removeClass("fa-pause");
                $("#carouselButton").children("i").addClass("fa-pause");
            }
        });
});