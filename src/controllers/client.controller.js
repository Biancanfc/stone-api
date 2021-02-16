const httpStatus = require("http-status");
var errors = require("restify-errors");
const ClientService = require("../services/client.service");

module.exports = {
  async getAll(req, res) {
    try {
      const { query } = req;
      const response = await ClientService.getAll(query);

      return res.status(200).json(response);
    } catch (error) {
      return res.send(
        httpStatus.BAD_REQUEST,
        new errors.BadRequestError(error)
      );
    }
  },
  async create(req, res) {
    try {
      const { body } = req;
      const response = await ClientService.create(body);

      return res.status(201).json(response);
    } catch (error) {
      return res.send(
        httpStatus.BAD_REQUEST,
        new errors.BadRequestError(error)
      );
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;
      const response = await ClientService.update(id, body);

      return res.status(200).json(response);
    } catch (error) {
      return res.send(
        httpStatus.BAD_REQUEST,
        new errors.BadRequestError(error)
      );
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const response = await ClientService.delete(id);

      return res.status(200).json(response);
    } catch (error) {
      return res.send(
        httpStatus.BAD_REQUEST,
        new errors.BadRequestError(error)
      );
    }
  },
};
