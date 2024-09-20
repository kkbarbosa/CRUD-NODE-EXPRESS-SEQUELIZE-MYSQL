module.exports = (sequelize, DataTypes) => {
    const Livro = sequelize.define('Livro', {
      id_livro: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      autor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      genero: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      data_lanc: {
        type: DataTypes.DATE,
        allowNull: false
      },
      imagem: {
        type: DataTypes.STRING, 
        allowNull: true
      }
    }, { tableName: 'livro' });

     Livro.associate = (models) => {
      Livro.hasMany(models.Leitura, {
        foreignKey: 'id_livro',
        as: 'leitura'
      });
    };
  
    return Livro;
  };
  