const { Vaga } = require("../models/index");

module.exports = {
  async store(req, res) {
    await Vaga.create({ ...req.body })
      .then((data) => {
        res.json(data);
      })
      .catch((err) =>
        res.status(500).send({
          message: err.message || "error",
        })
      );
  },
};
