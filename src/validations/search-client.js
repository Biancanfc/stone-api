const { validator } = require("cpf-cnpj-validator");
const Joi = require("@hapi/joi").extend(validator);

module.exports = Joi.object().keys({
  name: Joi.string(),
  createdAt: Joi.date(),
  bank: Joi.string(),
  state: Joi.string(),
  cpf: Joi.document().cpf(),
  cnpj: Joi.document().cnpj(),
});
