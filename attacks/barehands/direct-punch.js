module.exports = {
    name  : "Direct Punch",
    style : "windfall",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_RIGHT",
            FRONT_LEFT  : "FRONT_LEFT",
        },

        sword : {
            FRONT_LEFT : "FRONT_LEFT",
        },
    },

    hits : "same",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 10,
        advantage : {
            hit   : 3,
            guard : 1,
        },
    },

    modifiers : [],
};
