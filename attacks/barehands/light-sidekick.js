module.exports = {
    name  : "Light Sidekick",
    style : "faejin",
    
    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },

        sword : {
            BACK_RIGHT : "FRONT_LEFT",
            BACK_LEFT  : "FRONT_RIGHT",
        },
    },

    hits : "same",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 7,
            guard : 3,
        },
    },

    modifiers : [],
};
