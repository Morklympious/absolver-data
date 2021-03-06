module.exports = {
    name  : "Upper Elbow",
    style : "kahlt",

    stance : {
        barehands : {
            BACK_RIGHT : "BACK_LEFT",
            BACK_LEFT  : "BACK_RIGHT",
        },

        sword : {
            BACK_LEFT : "BACK_RIGHT",
        },
    },
    
    hits : "diff",
    
    height : "high",
    type   : "thrust",

    frames : {
        startup   : 23,
        advantage : {
            hit   : 14,
            guard : 5,
        },
    },

    modifiers : [],
};
    
