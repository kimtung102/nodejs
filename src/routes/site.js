import express from "express";
import { SiteController } from "../app/controllers/SiteController.js";

const siteRouter = express.Router()
const controller = new SiteController


siteRouter.get('/search', controller.search)
siteRouter.get('/', controller.home)

export default siteRouter