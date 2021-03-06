module.exports = {
    name  : "Double Wata",
    style : "faejin",
    
    stance : {
        barehands : {
            FRONT_RIGHT : "FRONT_RIGHT",
            FRONT_LEFT  : "FRONT_LEFT",
        },

        sword : false,
    },

    hits : "same",

    height : "mid",
    type   : "thrust",

    frames : {
        startup   : 14,
        advantage : {
            hit   : 8,
            guard : 3,
        },
    },

    modifiers : [ "double" ],
};
