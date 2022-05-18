const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
const { Schema } = mongoose;

const UserSchema = new Schema({
    id:{
        type: String,
        required: false
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: Number,
        required: true
    }
})

UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        //do not reveal passwordHash
        delete returnedObject.password
    } 
})

 const User = mongoose.model("user", UserSchema);

 module.exports = { User , UserSchema };