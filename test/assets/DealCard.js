cc.Class({
    extends: cc.Component,

    properties: {
        cardsNode: cc.Node,
        cardPrefab: cc.Prefab,
    },

    // use this for initialization
    onLoad: function () {
        
    },
    dealCard: function() {
            var card = cc.instantiate(this.cardPrefab);
            var cardNode = new cc.Node();
            cardNode.addChild(card);
            cardNode.setPosition(this.cardsNode.children.length*40, 0);
            this.cardsNode.addChild(cardNode);
            var anim = card.getComponent(cc.Animation);
            anim.play("dealCard");
    },
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
