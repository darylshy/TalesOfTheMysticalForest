var $story = $(".story");
var $subtextBtn = $(".subtext-btn");
var subtextBtnText = $subtextBtn.prop('value');
//----------------------------------------------------
function btnOver() {
    $subtextBtn.prop('value', subtextBtnText + " Alive");
    $story.addClass("story-fnOver");
}
function btnOut() {
    $subtextBtn.prop('value', subtextBtnText);
    $story.removeClass("story-fnOver");
}
$subtextBtn.hover(btnOver,btnOut);
