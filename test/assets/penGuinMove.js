const MoveState = cc.Enum({
    None: -1,
    Right: -1,
    Down: -1,
    Left: -1
});

cc.Class({
    extends: cc.Component,

    properties: {
        anim: {
            default: null,
            type: cc.Animation
        }
    },

    // use this for initialization
    onLoad: function () {
        this._moveDir = cc.p(-201, 361);
    },
    stop: function () {
        this.anim.stop();
        this.moveState = MoveState.None;
        this._moveDir = null;
    },
    moveDown: function () {
        if (this.moveState !== MoveState.Down) {
            this.anim.play('run_down');
            this.moveState = MoveState.Down;
        }
    },

    moveRight: function () {
        if (this.moveState !== MoveState.Right) {
            this.anim.play('run_right');
            this.moveState = MoveState.Right;
        }
    },

    moveLeft: function () {
        if (this.moveState !== MoveState.Left) {
            this.anim.play('run_left');
            this.moveState = MoveState.Left;
        }
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        let dir = cc.pSub(this.node.position, this._moveDir);
        let T_dir = cc.pNormalize(dir);
        let rad = cc.pToAngle(T_dir);
        let deg = cc.radiansToDegrees(rad);
        if (deg >= 90 || deg < -110) {
            this.moveLeft();
        } else if (deg >= -20 && deg < 90) {
            this.moveRight();
        } else {
            this.moveDown();
        }
        this._moveDir = this.node.getPosition();
    },
});
