const User = (sequelize, dataTypes) => {
  const model = sequelize.define(
    'User',
    {
      id: {
        primaryKey: true,
        type: dataTypes.INTEGER,
        autoIncrement: true,
      },
      name: dataTypes.STRING,
      email: {
        allowNull: false,
        type: dataTypes.STRING,
        unique: true,
      },
      password: {
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
      tableName: 'users',
    }
  );

  return model;
};

module.exports = User;
