const { Cliente } = require('../models');

const ClienteController = {
  async index(req, res) {
    const clientes = await Cliente.findAll();

    return res.status(200).json(clientes);
  },

  async update(req, res) {
    const { id } = req.params;
    const { name, document, address } = req.body;

    const clienteUpdate = await Cliente.update(
      { name, document, address },
      {
        where: {
          id,
        },
      }
    );
    return res.status(200).json(clienteUpdate);
  },

  async delete(req, res) {
    const { id } = req.params;

    const clienteDestroy = await Cliente.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json(clienteDestroy);
  },
};

module.exports = ClienteController;
