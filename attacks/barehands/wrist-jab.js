module.exports = {
    name  : "Wrist Jab",
    style : "stagger",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_RIGHT",
            FRONT_LEFT  : "FRONT_LEFT",
        },

        sword : false,
    },

    hits : "diff",

    height : "high",
    type   : "thrust",

    frames : {
        startup   : 11,
        advantage : {
            hit   : 5,
            guard : 1,
        },
    },

    modifiers : [],
};

