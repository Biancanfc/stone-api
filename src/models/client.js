const { Schema, model } = require("mongoose");

const clientSchema = new Schema(
  {
    typePerson: {
      type: String,
      enum: ["Pessoa Jurídica", "Pessoa Física"],
    },
    naturalPerson: {
      identificationName: {
        type: String,
      },
      name: {
        type: String,
      },
      cpf: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
      required: false,
    },
    legalPerson: {
      tradingName: {
        type: String,
      },
      companyName: {
        type: String,
      },
      cnpj: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
      required: false,
    },
    typeAddress: {
      type: String,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    neighborhood: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    addressNumber: {
      type: String,
      required: true,
    },
    complement: {
      type: String,
      required: false,
    },
    reference: {
      type: String,
      required: false,
    },
    bank: {
      type: String,
      required: true,
    },
    agency: {
      type: String,
      required: true,
    },
    agencyDigit: {
      type: String,
      required: true,
    },
    account: {
      type: String,
      required: true,
    },
    accountDigit: {
      type: String,
      required: true,
    },
    transactionFee: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Client = model("client", clientSchema);

module.exports = Client;
