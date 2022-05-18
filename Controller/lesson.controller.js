const lessonService = require("../Service/lesson.service");
const response = require("../Helper/response.helper");

const lessonController = (url , router) => {
    console.log(url);

    router.post( `${url}/login`, (req, res) => {
        lessonService.findLesson().then( (lessons) => response.success(res, lessons , "selection lesson ok"))
        .catch( err => { console.log(err); response.error(res, "Error during the selection of lessons")})
    })
}

exports = lessonController;