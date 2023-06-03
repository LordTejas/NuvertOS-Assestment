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

  }, {
    timestamps: true, // Enable timestamps
    createdAt: 'createdAt', // Set the name of the createdAt field
    updatedAt: 'updatedAt' // Set the name of the updatedAt field
  })

}