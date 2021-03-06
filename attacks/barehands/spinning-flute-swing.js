module.exports = {
    name  : "Spinning Flute Swing",
    style : "stagger",

    stance : {
        barehands : {
            BACK_RIGHT : "FRONT_RIGHT",
            BACK_LEFT  : "FRONT_LEFT",
        },

        sword : false,
    },
    
    hits : "diff",

    height : "high",
    type   : "horizontal",

    frames : {
        startup   : 20,
        advantage : {
            hit   : 12,
            guard : 4,
        },
    },

    modifiers : [],
};
    
