// jquery- the dollar sign fx to select a DOM node.  $('css selcetor- ex. p or div')
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

// Workshop Week IV: Add JavaScript (in the form of jQuery) to the scripts.js file that will activate the Reserve Campsite and Login modals when the corresponding button is clicked.
$(function() {
    $("#reserveButton").click(function(){
        $("#reserveModal").modal("show");
    });
});

$(function() {
    $("#loginButton").click(function(){
        $('#loginModal').modal('show');
    });
});