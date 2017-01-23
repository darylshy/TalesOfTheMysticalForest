class DOM{
    constructor(){
        this.$body = $("body");
        this.$container = this.$body.find(".container-fluid");
        this.$stories = this.$body.find(".stories")
        this.$story = this.$stories.find(".story");
        this.$storyImg = this.$story.find('.story-img');
        this.$subtext = this.$container.find(".subtext");
        this.$subtextBtn = this.$container.find(".subtext-btn");
        this.$headerTop = this.$body.find('.header-top');
        this.$headline = this.$headerTop.find(".headline");
        this.$storyTitle = this.$container.find(".story .title");
        this.$modalHeader = this.$container.find(".modal-content .modal-header .modal-title.h1");
        this.$modalBody = this.$container.find(".modal-content .modal-body");
        this.$footer = this.$body.find("footer.text-muted");
        this.$summary = this.$footer.find('.summary');
        this.$arrow;
    }
}