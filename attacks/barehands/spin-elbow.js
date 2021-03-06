module.exports = {
    name  : "Spin Elbow",
    style : "forsaken",

    stance : {
        barehands : {
            BACK_RIGHT : "BACK_LEFT",
            BACK_LEFT  : "BACK_RIGHT",
        },

        sword : {
            BACK_LEFT : "BACK_RIGHT",
        },
    },
    
    hits   : "diff",
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
    
