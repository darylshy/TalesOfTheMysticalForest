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

$(".headline").fitText(2, { minFontSize: '22px', maxFontSize: '84px' });
$(".subtext").fitText(4, { minFontSize: '12px', maxFontSize: '36px' });
