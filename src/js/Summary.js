class Summary{
    handleStoryEventStart(e){
        let getSummary = $.get("../mock/summaries.json");
        let storyWithFocus = e.target.className.match(/story\d/)[0];
        let storyNum = parseInt(storyWithFocus.match(/\d/)[0]);

        getSummary.then(function (result) {
            dom.$summary.html(result[storyNum-1].summary);
        });

        dom.$arrow = dom.$footer.find(`.arrow${storyNum}`);
        dom.$arrow.show();
        dom.$summary.slideDown('fast', function () {});
    }

    handleStoryEventEnd(e){
        e.preventDefault();
        dom.$arrow.hide();
        dom.$summary.slideUp('fast', function () {});
    }
}
