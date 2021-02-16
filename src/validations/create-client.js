const { validator } = require("cpf-cnpj-validator");
const Joi = require("@hapi/joi").extend(validator);

module.exports = Joi.object()
  .keys({
    typePerson: Joi.string().required(),
    legalPerson: Joi.when("typePerson", {
      is: "Pessoa Jurídica",
      then: Joi.object()
        .keys({
          tradingName: Joi.string().max(15).required(),
          companyName: Joi.string().required(),
          cnpj: Joi.document().cnpj().required(),
          email: Joi.string().required(),
          phone: Joi.string().min(11).max(15).required(),
        })
        .required(),
    }),
    naturalPerson: Joi.when("typePerson", {
      is: "Pessoa Física",
      then: Joi.object()
        .keys({
          identificationName: Joi.string().required(),
          name: Joi.string().required(),
          cpf: Joi.document().cpf().required(),
          email: Joi.string().required(),
          phone: Joi.string().min(11).max(15).required(),
        })
        .required(),
    }),
    typeAddress: Joi.string().required(),
    cep: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    neighborhood: Joi.string().required(),
    address: Joi.string().required(),
    addressNumber: Joi.string().required(),
    complement: Joi.string(),
    reference: Joi.string(),
    bank: Joi.string().required(),
    agency: Joi.string().required(),
    agencyDigit: Joi.string().required(),
    account: Joi.string().required(),
    accountDigit: Joi.string().required(),
    transactionFee: Joi.number().required(),
  })
  .required();
