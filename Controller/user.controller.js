const userService = require("../Service/user.service");
const response = require("../Helper/response.helper");

const userController  = (url , router) => {
    console.log(url);
    router.post( `${url}/login`, (req, res) => {
        userService.login(req.body).then( profil => response.success(res, profil, 'Logged in successfully'))
        .catch(error => { console.log(error) ; response.error(res, "invalid user name or password")} );
    });

    router.post(`${url}/register`, (req, res) => {
        console.log("register");
        userService.register(req.body).then( () => { response.success(res, null, "registration finished")})
        .catch(err => response.error(res, " An error occured during the registration"));
    })
}

module.exports = userController;