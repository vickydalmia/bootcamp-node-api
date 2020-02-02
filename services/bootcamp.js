const { bootcamp } = require("../models");
const bootCampService = {
  createBootCamp: async data => {
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
  },
  getAllBootCamp: async () => {
    return await bootcamp.findAll();
  },
  getBootCampById: async id => {
    return await bootcamp.findByPk(id);
  },
  updateBootCamp: async (id, data) => {
    console.log(id, data);
    const updatedId = await bootcamp.update(
      { name: data.name },
      { where: { id: id } }
      //{ where: { id: id }, returning: true, plain: true } it only work with postgres
    );
    return await bootcamp.findByPk(updatedId[0]);
  },

  deleteBootCamp: async id => {
    return await bootcamp.destroy({ where: { id: id } });
  }
};

module.exports = bootCampService;
