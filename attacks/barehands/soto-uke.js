module.exports = {
    name  : "Soto-uke",
    style : "windfall",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            BACK_LEFT : "FRONT_RIGHT",
        },
    },
    
    hits   : "same",
    height : "high",
    type   : "thrust",

    frames : {
        startup   : 12,
        advantage : {
            hit   : 7,
            guard : 3,
        },
    },

    modifiers : [],
};

