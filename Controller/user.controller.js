const userService = require("../Service/user.service");
const response = require("../Helper/response.helper");

const userController  = (url , router) => {
    console.log(url);
    router.post( `${url}/login`, (req, res) => {
        userService.login(JSON.stringify(req.body)).then( profil => response.success(res, profil, 'Logged in successfully'))
        .catch(error => console.log(error));
    });

    router.post(`${url}/register`, (req, res) => {
        console.log("register");
        userService.register(JSON.stringify(req.body)).then( () => { response.success(res, null, "registration finished")})
        .catch(err => response.error(res, " An error occured during the registration"));
    })
}

module.exports = userController;