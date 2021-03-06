module.exports = {
    name  : "Upper Backfist",
    style : "faejin",
    
    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : {
            BACK_RIGHT : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 13,
        advantage : {
            hit   : 6,
            guard : 5,
        },
    },

    modifiers : [],
};
