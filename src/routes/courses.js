import express from "express";
import { CourseController } from "../app/controllers/CourseController.js";

const coursesRouter = express.Router()

const controller = new CourseController

coursesRouter.get('/create', controller.create)
coursesRouter.post('/store', controller.store)
coursesRouter.get('/:id/edit', controller.edit)
coursesRouter.put('/:id', controller.update)
coursesRouter.delete('/:id', controller.delete)
coursesRouter.get('/:slug', controller.show)

export default coursesRouter