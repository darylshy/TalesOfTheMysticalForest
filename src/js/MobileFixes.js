class MobileFixes{

    static stickyHeader(){
        if(mobile.any() && ($(window.innerWidth)[0] < $(window.innerHeight)[0])){
            dom.$headerTop.css({
                'position': 'fixed',
                'width': '100%',
                'z-index':'1'
            });
            dom.$story.css('top','40%');
        }
    }

    static iPadHeaderAndFooterInit(){
        if (mobile.iPad() && $(window).width() === 1024){
            dom.$headerTop.addClass('iPad-header-fix');
        }
        if (mobile.iPad() && $(window).width() === 1366) {
            dom.$headerTop.addClass('iPad-Pro-header-fix');
        }

        if(mobile.iPad()){
            dom.$summary.css({'font-size': '2.5rem','line-height': '2.5rem'});
            if($(window.innerWidth)[0] === 1024) dom.$summary.css({'font-size': '3rem','line-height': '3rem'});
        }
    }
    static onChangeOrientation(){
        $(window).resize(function () {

            if(mobile.any() && ($(window.innerWidth)[0] < $(window.innerHeight)[0])){
                dom.$headerTop.css({
                    'position': 'fixed',
                    'width': '100%',
                    'z-index':'1'
                });
                dom.$story.css('top','40%');
            }else{
                dom.$headerTop.removeAttr('style');
                dom.$story.removeAttr('style');
            }


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

            //iPad Footer Fix On Orientation Change
            if(mobile.iPad()){
                dom.$summary.css({'font-size': '2.5rem','line-height': '2.5rem'});
                if($(window.innerWidth)[0] === 1024
                && $(window.innerWidth)[0] < $(window.innerHeight)[0])
                    dom.$summary.css({'font-size': '3rem','line-height': '3rem'});

            }
        });
    }
}