const Router = require('express').Router();
const ProductController = require('../controller/ProductController');
Router
    .get("/", ProductController.retrieve)
    .post("/", ProductController.save)
    .patch("/", ProductController.update)
    .delete("/", ProductController.delete);

module.exports = Router;