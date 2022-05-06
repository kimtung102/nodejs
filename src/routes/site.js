import express from "express";
import { SiteController } from "../app/controllers/SiteController.js";

const siteRouter = express.Router()
const controller = new SiteController


siteRouter.use('/search', controller.search)
siteRouter.use('/', controller.home)

export default siteRouter