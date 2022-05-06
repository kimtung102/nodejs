class SiteController {

    //[GET] /home
    home(req, res) {
        res.render('home')
    }

    search(req,res) {
        res.render('search')
    }
}

export { SiteController }