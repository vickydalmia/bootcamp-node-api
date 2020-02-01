exports.getAll = (req, res, next) => {
  res.status(200).json({ name: "bootcamp" });
};

exports.getOne = (req, res, next) => {
  res.status(200).json({ id: `${res.params.id}` });
};

exports.update = (req, res, next) => {
  res.status(200).json({ id: `${res.params.id}` });
};

exports.deleteOne = (req, res, next) => {
  res.status(200).json({ id: `${res.params.id}` });
};

exports.create = (req, res, next) => {
  res.status(200).json({ name: "created" });
};
