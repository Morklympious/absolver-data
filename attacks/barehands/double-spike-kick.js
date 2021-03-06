module.exports = {
    name  : "Double Spike Kick",
    style : "stagger",

    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_RIGHT",
            FRONT_LEFT  : "FRONT_LEFT",
        },

        sword : {
            FRONT_RIGHT : "FRONT_RIGHT",
            FRONT_LEFT  : "FRONT_LEFT",
        },
    },

    hits : "diff",
    
    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 7,
            guard : 4,
        },
    },

    modifiers : [ "double" ],
};
