const { User , UserSchema } = require('../Entity/user.modal');
const bcrypt = require('bcrypt');

async function login( {username, password} ){
    console.log("login service");
    const user = await User.findOne({username});
    if(bcrypt.compareSync(password, user.password)){
        return {...user.toJSON()}
    }
}

async function register(params){
    const {password} = params;
    const salt = bcrypt.genSaltSync(10);
    params.password = bcrypt.hashSync(password, salt);
    params.state = 1;
    var user = new User(params);
    user = await user.save();
    user.password = password;
    return login(user);
}

module.exports = { login , register };