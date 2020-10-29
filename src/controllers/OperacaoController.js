const { Operacao } = require('../models');

const OperacaoController = {
  async index(req, res) {
    const operacoes = await Operacao.findAll();

    return res.status(200).json(operacoes);
  },
  async update(req, res) {
    const { id } = req.params;
    const { id_cliente, id_carro, acao, data_operacao } = req.body;

    const carroUpdate = await Operacao.update(
      { id_cliente, id_carro, acao, data_operacao },
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

    const operacaoDestroy = await Operacao.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json(operacaoDestroy);
  },
};

module.exports = OperacaoController;
