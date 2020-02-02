const bootcampService = require("../services/bootcamp");
exports.getAll = async (req, res, next) => {
  try {
    const bootcamp = await bootcampService.getAllBootCamp();
    res.status(200).json({ result: "success", data: bootcamp });
  } catch (error) {
    res.status(200).json({ result: "failure", msg: error.message });
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const bootcamp = await bootcampService.getBootCampById(req.params.id);
    if (!bootcamp) {
      return res
        .status(404)
        .json({ result: "failure", msg: "No Records Found" });
    }
    res.status(200).json({ result: "success", data: bootcamp });
  } catch (error) {
    res.status(200).json({ result: "failure", msg: error.message });
  }
};

exports.update = async (req, res, next) => {
  try {
    const bootcamp = await bootcampService.updateBootCamp(
      req.params.id,
      req.body
    );
    res.status(200).json({ result: "success", data: bootcamp });
  } catch (error) {
    res.status(200).json({ result: "failure", msg: error.message });
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const deletedId = await bootcampService.deleteBootCamp(req.params.id);
    res.status(200).json({ result: "success", deletedId });
  } catch (error) {
    res.status(200).json({ result: "failure", msg: error.message });
  }
};

exports.create = async (req, res, next) => {
  try {
    const bootcamp = await bootcampService.createBootCamp(req.body);
    res.status(200).json({ data: bootcamp });
  } catch (e) {
    console.log(e);
    res.status(200).json({ result: "failure", error: { msg: e.message } });
  }
};
