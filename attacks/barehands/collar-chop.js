module.exports = {
    name  : "Collar Chop",
    style : "windfall",

    stance : {
        barehands : {
            BACK_RIGHT : "BACK_RIGHT",
            BACK_LEFT  : "BACK_LEFT",
        },

        sword : {
            BACK_RIGHT : "BACK_RIGHT",
        },
    },

    hits : "same",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 24,
        advantage : {
            hit   : 15,
            guard : 15,
        },
    },

    modifiers : [ "break" ],
};
