module.exports = {
    name  : "Plexus Elbow",
    style : "faejin",
    
    stance : {
        barehands : {
            FRONT_RIGHT : "BACK_RIGHT",
            FRONT_LEFT  : "BACK_LEFT",
        },

        sword : {
            FRONT_RIGHT : "BACK_RIGHT",
        },
    },

    hits : "diff",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 20,
        advantage : {
            hit   : 12,
            guard : 12,
        },
    },

    modifiers : [ "break" ],
};
