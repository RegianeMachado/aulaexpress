const { Carro } = require('../models');

const CarroController = {
  async index(req, res) {
    const carros = await Carro.findAll();

    return res.status(200).json(carros);
  },

  async update(req, res) {
    const { id } = req.params;
    const { model, marca, year, valorCompra, valorLocacao } = req.body;

    const carroUpdate = await Carro.update(
      { model, marca, year, valorCompra, valorLocacao },
      {
        where: {
          id,
        },
      }
    );
    return res.status(200).json(carroUpdate);
  },

  async delete(req, res) {
    const { id } = req.params;

    const carroDestroy = await Carro.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json(carroDestroy);
  },
};

module.exports = CarroController;
