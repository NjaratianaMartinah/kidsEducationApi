const mongoose = require("mongoose");
const { Schema } = mongoose;

const LessonSchema = new Schema({
    id:{
        type: String,
        required: false
    },
    fr:{
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        category:{
            type: String,
            required: true
        },
    },
    eng:{
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        category:{
            type: String,
            required: true
        },
    },
    type:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
});


LessonSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    } 
})

const Lesson = mongoose.model("lesson", LessonSchema);

module.exports = { Lesson , LessonSchema };