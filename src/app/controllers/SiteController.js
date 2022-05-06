import Course from "../models/Course.js"
class SiteController {

    //[GET] /home
    home(req, res) {
        // const course = new Course()
        // Course.find({}, function (err, docs) {
        //     docs.forEach(element => {
                
        //         console.log(element);
        //     });
        //   });
        res.render('home')
    }

    search(req,res) {
        res.render('search')
    }
}

export { SiteController }