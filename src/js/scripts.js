var $container = $(".container-fluid");
var $story = $container.find(".story");
var $subtext = $container.find(".subtext");
var $subtextBtn = $container.find(".subtext-btn");
var subtextBtnText = $subtextBtn.prop('value');
var $headline = $container.find(".headline");
var $storyTitle = $container.find(".story .title");
var $modalHeader = $container.find(".modal-content .modal-header .modal-title.h1");
var $modalBody = $container.find(".modal-content .modal-body");
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

$headline.fitText(2, { minFontSize: '18px', maxFontSize: '84px' });
$subtext.fitText(4, { minFontSize: '12px', maxFontSize: '36px' });
$storyTitle.fitText(2, {minFontSize:'12px', maxFontSize:'36px'});
$modalHeader.fitText(2, {minFontSize:'12px', maxFontSize:'36px'});
$modalBody.fitText(6, {minFontSize:'12px', maxFontSize:'36px'});



