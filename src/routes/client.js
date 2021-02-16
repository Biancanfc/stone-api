const express = require("express");
const router = express.Router();

const ClientController = require("../controllers/client.controller");

const { validation } = require("../lib/validator");
const createClient = require("../validations/create-client");
const updateClient = require("../validations/update-client");
const searchClient = require("../validations/search-client");

router.get("/", validation(searchClient), ClientController.getAll);
router.post("/", validation(createClient), ClientController.create);
router.patch("/:id", validation(updateClient), ClientController.update);
router.delete("/:id", ClientController.delete);

module.exports = (app) => app.use("/client", router);
