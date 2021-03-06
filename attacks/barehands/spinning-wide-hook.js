module.exports = {
    name  : "Spinning Wide Hook",
    style : "forsaken",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : {
            BACK_RIGHT : "FRONT_RIGHT",
        },
    },
    
    hits : "diff",
    
    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 23,
        advantage : {
            hit   : 14,
            guard : 3,
        },
    },


    modifiers : [],
};
    
