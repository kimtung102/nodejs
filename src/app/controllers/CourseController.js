import Course from "../models/Course.js"
import { handleMongooseArray, handleMongooseData } from '../../util/mongoose.js'

class CourseController {

    //[Get] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                console.log(course);
                console.log(req.params.slug);
                res.render('courses/show', { icourse: handleMongooseData(course) })
            })
            .catch(next)
    }
    //[Get] /course/create
    create(req, res, next) {
        res.render('courses/create')
    }

    //[Post] /course/store
    store(req, res, next) {
        const course = new Course(req.body)
        course.save()
        res.send('saved!')
    }
    //[Get] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', handleMongooseData(course)))
            .catch(next)
    }

    //[Put] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id},req.body)
        .then(()=> res.redirect('/me/stored/courses'))
        .catch(next)
    }

    //[Delete] /course/:id
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }
}

export { CourseController }