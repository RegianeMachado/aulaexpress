const Carro = (sequelize, dataTypes) => {
  const model = sequelize.define(
    'Carro',
    {
      id: {
        primaryKey: true,
        type: dataTypes.INTEGER,
        autoIncrement: true,
      },
      model: {
        allowNull: false,
        type: dataTypes.STRING,
      },
      marca: {
        allowNull: false,
        type: dataTypes.STRING,
      },
      year: {
        allowNull: false,
        type: dataTypes.INTEGER,
      },
      valorCompra: {
        allowNull: false,
        type: dataTypes.INTEGER,
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
      tableName: 'carro',
    }
  );
  Carro.associate = function (models) {
    Carro.belongsTo(models.Operacao, {
      foreignKey: 'id_carro',
      as: 'carro',
    });
  };

  return model;
};

module.exports = Carro;
