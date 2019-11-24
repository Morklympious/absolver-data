module.exports =  {
    name  : "Roll Back Fist",
    style : "windfall",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_LEFT",
            FRONT_LEFT  : "BACK_RIGHT",
        },

        sword : {
            FRONT_LEFT : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "high",
    type   : "thrust",

    modifiers : [ "strafe" ],
};

