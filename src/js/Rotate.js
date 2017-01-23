class Rotate{
    static rotateChildren(boxes, addDirection, removeDirection){
        for(let box of boxes){
            $(box).removeClass(removeDirection);
            $(box).addClass(addDirection);
        }
    }

    static setDirection(boxClass, children){
        let forward = 'rotate-box-forward';
        let backward = 'rotate-box-backward';
        if(boxClass.search(/rotate-box-forward|rotate-box-backward/) === -1)
            Rotate.rotateChildren(children,forward);
        else if(boxClass.search(/rotate-box-forward/) === -1)
            Rotate.rotateChildren(children,forward,backward);
        else
            Rotate.rotateChildren(children,backward,forward);
    }
}