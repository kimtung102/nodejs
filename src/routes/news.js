import express from 'express'
import {NewsController} from '../app/controllers/NewsController.js'


const newsRouter = express.Router()
const controller = new NewsController



// '/' de cuoi
newsRouter.use('/',controller.index)

export default newsRouter