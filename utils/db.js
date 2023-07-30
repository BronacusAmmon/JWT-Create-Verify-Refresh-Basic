//fake DB for testing

//assume emails are unique, but will be tracked by a uuid
//all passwords follow this schema //bcrypt password salt 6, same password as email
exports.users = [
    {
        uuid: 1,
        email: "John@test.com",
        password: "$2b$06$KcwAs4CitEvZmcTCFOWuzu1D4dilI/l5hJYJlrE8lG6jBMEaNPPha",
        role: "user",
        favoriteColor:"red"
    },
    {
        uuid: 2,
        email: "Sarah@test.com",
        password: "$2b$06$NPzgnXxXYoxDJk0tKNc/x.398MLckDmPTmD76mxW9hk9TQqu3aHzq",
        role: "user",
        favoriteColor:"orange"
    },
    {
        uuid: 3,
        email: "Crowley@test.com",
        password: "$2b$06$vwdgUVGUETeWGB0XzPZ5Ve.EZF6GNcfZ5obxijExTK19JjZVilqYS",
        role: "admin",
        favoriteColor:"yellow"
    },
    {
        uuid: 4,
        email: "Aziraphale@test.com",
        password: "$2b$06$iQmwUsX2VS4Gk2BkLHlnNOPdatcP38mWVn53R/83OqbSnEWJcETbC",
        role: "admin",
        favoriteColor:"green"
    },
    {
        uuid: 5,
        email: "Gabriel@test.com",
        password: "$2b$06$gSn5LIZ47SypO.za6wNnJe2hck1HTzP7UoQ6XLamq3VgT6yRvNRGy",
        role: "user",
        favoriteColor:"blue"
    },
]