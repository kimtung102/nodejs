import express from "express";
import { MeController } from "../app/controllers/MeController.js";

const meRouter = express.Router()
const controller = new MeController

meRouter.get('/stored/courses', controller.storedCourses)

export default meRouter