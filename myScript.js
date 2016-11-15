// open header nav with clicking on menu icon in top right corner
$("#menuIcon").click(function() {
    $("#myTopnav").slideToggle("slow", function() {
    });
});

// Description over the top 4 photos fades in slowly
function descriptionFadeIn() {
 $(".dscr").hide();
 $(".dscr").fadeIn(1000);
}

$(document).ready(descriptionFadeIn);