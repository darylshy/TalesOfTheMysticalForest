let $body = $("body");
let $container = $body.find(".container-fluid");
let $story = $container.find(".story");
let $storyImg = $story.find('.story-img');
let $subtext = $container.find(".subtext");
let $subtextBtn = $container.find(".subtext-btn");
let subtextBtnText = $subtextBtn.prop('value');
let $headline = $container.find(".headline");
let $storyTitle = $container.find(".story .title");
let $modalHeader = $container.find(".modal-content .modal-header .modal-title.h1");
let $modalBody = $container.find(".modal-content .modal-body");
let $footer = $body.find("footer.text-muted");
let $summary = $footer.find('.summary');
let $arrow;
//Animations----------------------------------------------------
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
$footer.fitText(6, {minFontSize:'12px', maxFontSize:'36px'});

function handleStoryEventStart(e) {
    let getSummary = $.get("../mock/summaries.json");
    let storyWithFocus = e.target.className.match(/story\d/)[0];
    let storyNum = parseInt(storyWithFocus.match(/\d/)[0]);
    getSummary.then(function (result) {
        $summary.html(result[storyNum-1].summary);
    });
    $arrow = $footer.find(`.arrow${storyNum}`);
    $arrow.show();
    $summary.slideDown('fast', function () {

    });
}

function handleStoryEventEnd(e) {
    e.preventDefault();
    $arrow.hide();
    $summary.slideUp('fast', function () {});

}

function stopStoryImgBubble(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
}
$storyImg.on('touchstart',stopStoryImgBubble);
$storyImg.on('touchend',stopStoryImgBubble);
$story.hover(handleStoryEventStart,handleStoryEventEnd);
$story.on("touchstart", function(e){
    handleStoryEventStart(e);
    let storyNum = e.target.className.match(/\d\d?/g)[2];
    $(this).find(".story-img").addClass(`story${storyNum}-img-hover`);
});
$story.on("touchend", function(e){
    handleStoryEventEnd(e);
    let storyImg = $(this).find('.story-img');
    let storyImgClass = $(storyImg).prop('class');
    storyImg.removeClass(`${storyImgClass.match(/story\d-img-hover/)[0]}`);
});




