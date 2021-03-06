module.exports = {
    name  : "Rising Kick",
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

    hits : "diff",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 15,
        advantage : {
            hit   : 7,
            guard : 6,
        },
    },

    modifiers : [],
};
