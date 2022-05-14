const { User , UserSchema } = require('../Entity/user.modal');
const bcrypt = require('bcrypt');

async function login( {userName, password} ){
    const user = await User.findOne({userName});
    console.log(user);
    if(bcrypt.compareSync(password, user.password)){
        return {...user.toJSON()}
    }
}

async function register(params){
    const {password} = params;
    const salt = bcrypt.genSaltSync(10);
    params.password = bcrypt.hashSync(password, salt);
    params.state = 1;
    const user = new User(params);
    await user.save();
}

module.exports = { login , register };