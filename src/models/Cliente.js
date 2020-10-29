const Cliente = (sequelize, dataTypes) => {
  const model = sequelize.define(
    'Cliente',
    {
      id: {
        primaryKey: true,
        type: dataTypes.INTEGER,
        autoIncrement: true,
      },
      name: dataTypes.STRING,
      document: {
        allowNull: false,
        type: dataTypes.STRING,
        unique: true,
      },
      address: {
        allowNull: false,
        type: dataTypes.STRING,
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
      tableName: 'cliente',
    }
  );
  Cliente.associate = function (models) {
    Cliente.belongsTo(models.Operacao, {
      foreignKey: 'id_cliente',
      as: 'cliente',
    });
  };

  return model;
};

module.exports = Cliente;
