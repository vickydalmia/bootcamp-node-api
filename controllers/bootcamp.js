const bootcampService = require("../services/bootcamp");
exports.getAll = async (req, res, next) => {
  console.log(req.body);
  const bootcamp = await bootcampService.createBootCamp(req.body);
  console.log(bootcamp);
  res.status(200).json({ name: "bootcamp" });
};

exports.getOne = (req, res, next) => {
  res.status(200).json({ id: `${req.params.id}` });
};

exports.update = (req, res, next) => {
  res.status(200).json({ id: `${req.params.id}` });
};

exports.deleteOne = (req, res, next) => {
  res.status(200).json({ id: `${req.params.id}` });
};

exports.create = async (req, res, next) => {
  console.log(req.body);
  const bootcamp = await bootcampService.createBootCamp(req.body);
  console.log(bootcamp);
  res.status(200).json({ name: "bootcamp" });
};
