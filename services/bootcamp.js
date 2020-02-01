const { bootcamp } = require("../models");
const bootCampService = {
  createBootCamp: async data => {
    console.log(data);
    const bootcampModel = {
      name: data.name,
      description: data.description,
      website: data.website,
      phone: data.phone,
      email: data.email,
      address: data.address,
      slug: data.name
    };
    const bootcampCreate = await bootcamp.create(bootcampModel);
    return bootcampCreate;
  }
};

module.exports = bootCampService;
