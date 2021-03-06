module.exports = {
    name  : "Ankle Stamp",
    style : "windfall",
    
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

    hits : "same",

    height : "low",
    type   : "thrust",

    frames : {
        startup   : 11,
        advantage : {
            hit   : 3,
            guard : 2,
        },
    },

    modifiers : [],
};
