module.exports = {
    name  : "Hammer Kick",
    style : "windfall",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            FRONT_RIGHT : "FRONT_LEFT",
            FRONT_LEFT  : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "mid",
    type   : "vertical",

    frames : {
        startup   : 20,
        advantage : {
            hit   : 12,
            guard : 12,
        },
    },

    modifiers : [ "break" ],
};
    
