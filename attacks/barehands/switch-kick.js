module.exports = {
    name  : "Switch Kick",
    style : "faejin",
    
    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_RIGHT",
            FRONT_LEFT  : "FRONT_LEFT",
        },

        sword : {
            FRONT_RIGHT : "FRONT_RIGHT",
            FRONT_LEFT  : "FRONT_LEFT",
        },
    },

    hits : "diff",

    height : "low",
    type   : "thrust",

    frames : {
        startup   : 13,
        advantage : {
            hit   : 7,
            guard : 4,
        },
    },

    modifiers : [],
};
