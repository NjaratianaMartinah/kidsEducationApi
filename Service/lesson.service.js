const {Lesson, LessonSchma} = require('../Entity/lesson.modal');

async function findLesson(){
    return await Lesson.find({});
}

module.exports = { findLesson }; 