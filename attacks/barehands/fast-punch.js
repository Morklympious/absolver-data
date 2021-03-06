module.exports = {
    name  : "Fast Punch",
    style : "forsaken",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : {
            BACK_LEFT : "FRONT_LEFT",
        },
    },

    hits : "same",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 8,
            guard : 4,
        },
    },

    modifiers : [],
};
    
