const { USER , UserSchema } = require('../Entity/user.modal');

async function login( {userName, password} ){
    const user = await USER.findOne({userName});
    console.log(user);
}

async function register(params){
    const {password} = params;
    const salt = bcrypt.genSaltSync(10);
    params.password = bcrypt.hashSync(password, salt);
    params.state = 1;
    const profil = new Profil(params)
    await profil.save();
}