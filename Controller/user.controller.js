const userService = require("../Service/user.service");

const userController  = (url , router) => {
    console.log(url);
    router.post( `${url}/login`, (req, res) => {
        console.log("login");
    });

    router.post(`${url}/register`, (req, res) => {
        console.log("register");
        console.log(req.body);
        userService.register(req.body).then( () => {res.body("OK")});
    })
}

module.exports = userController;