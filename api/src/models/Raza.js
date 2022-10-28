const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('raza', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    raza: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    añosDeVida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      get() {
        const age = this.getDataValue("añosDeVida")
        return age ? `${age} years` : null
      }
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  { timestamps: false })
};
