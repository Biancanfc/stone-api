const { Schema, model } = require("mongoose");

const activitySchema = new Schema(
  {
    type: {
      type: String,
      enum: ["Pessoa Jurídica", "Pessoa Física"],
    },
    naturalPerson: {
      identificationName: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      cpf: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
    legalPerson: {
      tradingName: {
        type: String,
        required: true,
      },
      companyName: {
        type: String,
        required: true,
      },
      cnpj: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
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
    number: {
      type: String,
      required: true,
    },
    complement: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
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

const Activity = model("activities", activitySchema);

module.exports = Activity;
