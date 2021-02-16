const request = require("supertest");
const app = require("./index");
const Client = require("./models/client");

const client = {
  typePerson: "Pessoa Física",
  typeAddress: "Principal",
  cep: "08460-526",
  state: "São Paulo",
  city: "São Paulo",
  neighborhood: "Guaianazes",
  address: "Rua Juvêncio Petra",
  addressNumber: "295",
  complement: "Casa",
  bank: "Inter",
  agency: "12122",
  agencyDigit: "2",
  account: "345678",
  accountDigit: "3",
  transactionFee: 29,
};

beforeEach(async () => {
  await Client.deleteMany();
  await Client(client).save();
});

test("Should return all clients in database", async (done) => {
  const res = await request(app).get("/client");

  expect(res.body.data.length).toEqual(1);
  expect(res.status).toEqual(200);
  done();
});

test("Should save client to database", async (done) => {
  const res = await request(app)
    .post("/client")
    .send({
      typePerson: "Pessoa Física",
      naturalPerson: {
        identificationName: "Bianca",
        name: "Bianca Nunes",
        cpf: "50281081883",
        email: "bianca.nunes1175@gmail.com",
        phone: "(11) 930007372",
      },
      typeAddress: "Principal",
      cep: "08460-526",
      state: "São Paulo",
      city: "São Paulo",
      neighborhood: "Guaianazes",
      address: "Rua Juvêncio Petra",
      addressNumber: "295",
      complement: "Casa",
      bank: "Inter",
      agency: "12122",
      agencyDigit: "2",
      account: "345678",
      accountDigit: "3",
      transactionFee: 29,
    });

  expect(res.status).toEqual(201);
  done();
});

test("Should update client to database", async (done) => {
  const response = await Client(client).save();

  const res = await request(app)
    .patch("/client/" + response._id)
    .send({
      transactionFee: 20,
    });

  expect(res.status).toEqual(200);
  done();
});

test("Should delete client to database", async (done) => {
  const response = await Client(client).save();

  const res = await request(app)
    .patch("/client/" + response._id)
    .send({
      transactionFee: 20,
    });

  expect(res.status).toEqual(200);
  done();
});
