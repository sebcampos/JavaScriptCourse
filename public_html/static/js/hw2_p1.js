/**
 * This method collects all elements of the class invis
 * then using jquery makes them appear on screen
 * one after the next
 * @return {void}
 */
function presentation()
{
    $(".invis").each(function(index) {
        $(this).delay(1500*index).fadeIn(1500);
    });
    $(".invis2").each(function(index) {
        $(this).delay(1500*index).fadeIn(1500);
    });
}

document.addEventListener("DOMContentLoaded", presentation);
