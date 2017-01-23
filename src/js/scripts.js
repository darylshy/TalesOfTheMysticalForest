//instance of cached DOM
let dom = new DOM();

//Handles subtext button animation
let stBtn = new Subtextbtn();
let subtextBtnText = dom.$subtextBtn.prop('value');
dom.$subtextBtn.hover(stBtn.btnOver,stBtn.btnOut);

//Handles text resize
dom.$headline.fitText(2, { minFontSize: '18px', maxFontSize: '84px' });
dom.$subtext.fitText(4, { minFontSize: '12px', maxFontSize: '36px' });
dom.$storyTitle.fitText(2, {minFontSize:'12px', maxFontSize:'36px'});
dom.$modalHeader.fitText(2, {minFontSize:'12px', maxFontSize:'36px'});
dom.$modalBody.fitText(6, {minFontSize:'12px', maxFontSize:'36px'});
dom.$footer.fitText(6, {minFontSize:'12px', maxFontSize:'36px'});

//Handles Footer Summary on Hover(desktop), touchstart/end(mobile)
let summary = new Summary();
//-------------------------
dom.$story.hover(function(e){
    summary.handleStoryEventStart(e);
},function(e){
    summary.handleStoryEventEnd(e);
});

dom.$story.on("touchstart", function(e){
    summary.handleStoryEventStart(e);
    let storyNum = e.target.className.match(/\d\d?/g)[2];
    $(this).find(".story-img").addClass(`story${storyNum}-img-hover`);
});

dom.$story.on("touchend", function(e){
    summary.handleStoryEventEnd(e);
    let storyImg = $(this).find('.story-img');
    let storyImgClass = $(storyImg).prop('class');
    storyImg.removeClass(`${storyImgClass.match(/story\d-img-hover/)[0]}`);
});

//-------------------------
/*Prevents Footer Summary event from firing when $storyImg is touched on Mobile Phones.
$storyImg will be used to start the game on mobile*/
function stopStoryImgBubble(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
}
dom.$storyImg.on('touchstart',function(e){
    stopStoryImgBubble(e);
    alert("START GAME");
});
dom.$storyImg.on('touchend',stopStoryImgBubble);
//--------------------------

//Fix for iPad and iPad Pro Header
//On initial load
let mobile = Mobile.isMobile();

if (mobile.iPad() && $(window).width() < 1366){
    dom.$headerTop.addClass('iPad-header-fix');
}
if (mobile.iPad() && $(window).width() === 1366) {
    dom.$headerTop.addClass('iPad-Pro-header-fix');
}

//On resize - for orientation change and testing
$(window).resize(function () {
    if(dom.$headerTop.hasClass('iPad-header-fix')
    || dom.$headerTop.hasClass('iPad-Pro-header-fix'))
    {
        let headerClass = dom.$headerTop.prop('class').match(/iPad(?:-Pro)?-header-fix/g)[0];
        dom.$headerTop.removeClass(headerClass);
    }

    if (mobile.iPad() && $(window).width() === 1024){
        if(dom.$headerTop.hasClass('iPad-Pro-header-fix')){
            dom.$headerTop.removeClass('iPad-Pro-header-fix')
        }

        dom.$headerTop.addClass('iPad-header-fix');
    }
    if (mobile.iPad() && $(window).width() === 1366){
        if(dom.$headerTop.hasClass('iPad-header-fix')){
            dom.$headerTop.removeClass('iPad-header-fix');
        }

        dom.$headerTop.addClass('iPad-Pro-header-fix');
    }
});

//Code for rotating story-img as an alternative to rotating story div
//Animations
dom.$storyImg.on('click', function (e) {

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



