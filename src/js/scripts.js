//refactoring js before I go any further----------------------
let $body = $("body");
let $container = $body.find(".container-fluid");
let $stories = $body.find(".stories")
let $story = $stories.find(".story");
let $storyImg = $story.find('.story-img');
let $subtext = $container.find(".subtext");
let $subtextBtn = $container.find(".subtext-btn");
let subtextBtnText = $subtextBtn.prop('value');
let $headerTop = $body.find('.header-top');
let $headline = $headerTop.find(".headline");
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
$storyImg.on('touchstart',function(e){
    stopStoryImgBubble(e);
    alert("START GAME");
});
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
//----------------------------------------------------------------------

let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    iPad: function () {
        return navigator.userAgent.match(/iPad/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


//Fix for iPad and iPad Pro Header
//On initial load
if (isMobile.iPad() && $(window).width() < 1366){
    $headerTop.addClass('iPad-header-fix');
}
if (isMobile.iPad() && $(window).width() === 1366) {
    $headerTop.addClass('iPad-Pro-header-fix');
}
//On resize - for orientation change and testing
$(window).resize(function () {
    if($headerTop.hasClass('iPad-header-fix')
    || $headerTop.hasClass('iPad-Pro-header-fix'))
    {
        let headerClass = $headerTop.prop('class').match(/iPad(?:-Pro)?-header-fix/g)[0];
        console.log(headerClass);
        $headerTop.removeClass(headerClass);
    }

    if (isMobile.iPad() && $(window).width() === 1024){
        if($headerTop.hasClass('iPad-Pro-header-fix')){
            $headerTop.removeClass('iPad-Pro-header-fix')
        }

        $headerTop.addClass('iPad-header-fix');
    }
    if (isMobile.iPad() && $(window).width() === 1366){
        if($headerTop.hasClass('iPad-header-fix')){
            $headerTop.removeClass('iPad-header-fix');
        }

        $headerTop.addClass('iPad-Pro-header-fix');
    }
});

//Code for rotating story-img as an alternative to rotating story div
//Animations
$storyImg.on('click', function (e) {

    let child = e.target;
    let parent = child.parentElement;
    let grandParent = child.parentElement.parentElement;
    let grandChildren = $(grandParent).children().children();
    let parents = $(grandParent.parentElement).children().children();
    let boxClass,boxChildren;

    if(child.className === "story-title"){
        boxClass = parent.className;
        boxChildren = parents;
        
    }else{
        boxClass = child.className;
        boxChildren = grandChildren;
        // setTimeout(function () {
        //     $(boxChildren).css("background","url(../../../assets/images/skullhand.png)");
        // },350);
    }

    setDirection(boxClass,boxChildren);
});

let rotateChildren = (boxes, addDirection, removeDirection)=>{
    for(let box of boxes){
        $(box).removeClass(removeDirection);
        $(box).addClass(addDirection);
    }
};

let setDirection = (boxClass, children)=>{
    let forward = 'rotate-box-forward';
    let backward = 'rotate-box-backward';
    if(boxClass.search(/rotate-box-forward|rotate-box-backward/) === -1)
        rotateChildren(children,forward);
    else if(boxClass.search(/rotate-box-forward/) === -1)
        rotateChildren(children,forward,backward);
    else
        rotateChildren(children,backward,forward);
};



