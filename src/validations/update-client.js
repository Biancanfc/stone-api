const { validator } = require("cpf-cnpj-validator");
const Joi = require("@hapi/joi").extend(validator);

module.exports = Joi.object().keys({
  typeAddress: Joi.string(),
  cep: Joi.string(),
  state: Joi.string(),
  city: Joi.string(),
  neighborhood: Joi.string(),
  address: Joi.string(),
  addressNumber: Joi.string(),
  complement: Joi.string(),
  reference: Joi.string(),
  transactionFee: Joi.number(),
});
