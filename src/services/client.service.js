const Client = require("../models/client");

module.exports = {
  async getAll(queryParams) {
    const { limit, skip } = queryParams;

    const clients = await Client.find()
      .skip(parseInt(skip))
      .limit(parseInt(limit));

    const count = await Client.find().count();

    return { limit: limit, skip: skip, total: count, data: clients };
  },
  async create(data) {
    const client = await Client.create(data);

    return client;
  },
  async update(id, data) {
    const client = await Client.findByIdAndUpdate(id, data, { new: true });

    return client;
  },
  async delete(id) {
    const client = await Client.findByIdAndDelete(id);

    return client;
  },
};
