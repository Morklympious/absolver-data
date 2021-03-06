module.exports = {
    name  : "Knee Strike",
    style : "forsaken",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },
    },

    hits : "diff",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 20,
        advantage : {
            hit   : 12,
            guard : 12,
        },
    },

    modifiers : [ "break", "jump" ],
};
    
