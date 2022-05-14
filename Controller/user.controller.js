const userService = require("../Service/user.service");
const response = require("../Helper/response.helper");

const userController  = (url , router) => {
    console.log(url);
    router.post( `${url}/login`, (req, res) => {
        userService.login(req.body).then( profil => response.success(res, profil, 'Logged in successfully'))
        .catch(error => response.error(res, "Login failed"));
    });

    router.post(`${url}/register`, (req, res) => {
        console.log("register");
        console.log(req.body);
        userService.register(req.body).then( () => { response.success(res, null, "registration finished")})
        .catch(err => response.error(res, " An error occured during the registration"));
    })
}

module.exports = userController;