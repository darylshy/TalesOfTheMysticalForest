class Subtextbtn{
    btnOver(){
        dom.$subtextBtn.prop('value', subtextBtnText + " Alive");
        dom.$story.addClass("story-fnOver");
    }
    btnOut(){
        dom.$subtextBtn.prop('value', subtextBtnText);
        dom.$story.removeClass("story-fnOver");
    }
}


