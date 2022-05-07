import Course from "../models/Course.js"
import { handleMongooseArray, handleMongooseData } from '../../util/mongoose.js'
class SiteController {

    //[GET] /home
    home(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', { courses: handleMongooseArray(courses) }) //just handlebars problem
            })
            .catch(next)
    }

    search(req, res) {
        res.render('search')
    }
}

export { SiteController }