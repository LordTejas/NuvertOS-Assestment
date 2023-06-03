module.exports = (sequelize, DataTypes) => {

  const Chemical = sequelize.define('chemical', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
    
  })

}