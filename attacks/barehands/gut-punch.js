module.exports = {
    name  : "Gut Punch",
    style : "stagger",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            BACK_LEFT : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 6,
            guard : 4,
        },
    },

    modifiers : [],
};

