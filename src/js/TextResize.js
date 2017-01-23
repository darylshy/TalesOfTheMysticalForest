class TextResize{
    static resize(){
        //Handles text resize
        dom.$headline.fitText(2, { minFontSize: '18px', maxFontSize: '84px' });
        dom.$subtext.fitText(4, { minFontSize: '12px', maxFontSize: '36px' });
        dom.$storyTitle.fitText(2, {minFontSize:'12px', maxFontSize:'36px'});
        dom.$modalHeader.fitText(2, {minFontSize:'12px', maxFontSize:'36px'});
        dom.$modalBody.fitText(6, {minFontSize:'12px', maxFontSize:'36px'});
        dom.$footer.fitText(6, {minFontSize:'12px', maxFontSize:'36px'});
    }
}