cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        var finished = function(event) {
            console.log(event);
        };
        var anim = this.node.getComponent(cc.Animation);
        anim.on("finished", finished, this);        
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
