let dom = new DOM();
let stBtn = new Subtextbtn();
let subtextBtnText = dom.$subtextBtn.prop('value');
let summary = new Summary();
let mobile = Mobile.isMobile();

//Handles subtext button animation
//================================
dom.$subtextBtn.hover(stBtn.btnOver,stBtn.btnOut);

//Handles text resize
//===================
TextResize.resize();

//Handles Footer Summary on Hover(desktop), touchstart/end(mobile)
//================================================================
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

/*Prevents Footer Summary event from firing when $storyImg is touched on Mobile Phones.
 $storyImg will be used to start the game on mobile
 =======================================================================================*/
function stopStoryImgBubble(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
}
dom.$storyImg.on('touchstart',function(e){
    stopStoryImgBubble(e);
    alert("START GAME");
});
dom.$storyImg.on('touchend',stopStoryImgBubble);


//MOBILE
//Sticky header for all mobile devices in portrait mode
//=====================================================
MobileFixes.stickyHeader();

//Fix for iPad and iPad Pro Header
//================================
//On initial load
<<<<<<< HEAD
MobileFixes.iPadHeaderAndFooterInit();
=======
MobileFixes.iPadHeaderInit();
>>>>>>> cc1adb89dac96a4f5bea2c5a324a01f2143423c0

//On resize - for orientation change and testing ALL MOBILE
//=========================================================
MobileFixes.onChangeOrientation();

//Code for rotating story-img as an alternative to rotating story div
//===================================================================
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

    Rotate.setDirection(boxClass,boxChildren);
});



