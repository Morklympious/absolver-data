module.exports = {
    name  : "Spinning High Kick",
    style : "forsaken",

    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },

        sword : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },
    },

    hits : "diff",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 22,
        advantage : {
            hit   : 14,
            guard : 4,
        },
    },

    modifiers : [],
};
    
