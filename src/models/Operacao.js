const Operacao = (sequelize, dataTypes) => {
  const model = sequelize.define(
    'Operacao',
    {
      id: {
        primaryKey: true,
        type: dataTypes.INTEGER,
        autoIncrement: true,
      },
      acao: {
        allowNull: false,
        type: dataTypes.STRING,
        unique: true,
      },
      data_operacao: {
        allowNull: false,
        type: dataTypes.STRING,
      },
      id_cliente: {
        type: dataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Cliente',
          key: 'id',
        },
      },
      id_carro: {
        type: dataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Carro',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: dataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: dataTypes.DATE,
      },
    },
    {
      tableName: 'operacao',
    }
  );
  Operacao.associate = function (models) {
    Operacao.belongsTo(models.Cliente, { foreignKey: 'id_cliente' });
    Operacao.belongsTo(models.Carro, { foreignKey: 'id_carro' });
  };

  return model;
};

module.exports = Operacao;
