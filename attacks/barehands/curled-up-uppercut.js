module.exports = {
    name  : "Curled Up Uppercut",
    style : "kahlt",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            FRONT_LEFT : "FRONT_RIGHT",
        },
    },

    hits : "same",

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
