import Course from "../models/Course.js"
import { handleMongooseArray, handleMongooseData } from '../../util/mongoose.js'

class MeController {

    //[Get] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('me/stored-courses', { courses: handleMongooseArray(courses) }) //just handlebars problem
            })
            .catch(next)
    }
}

export { MeController }