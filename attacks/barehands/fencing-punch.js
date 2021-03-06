module.exports = {
    name  : "Fencing Punch",
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

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 13,
        advantage : {
            hit   : 6,
            guard : 5,
        },
    },

    modifiers : [],
};
