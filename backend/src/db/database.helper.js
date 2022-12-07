const mongoose = require("mongoose");

const databaseUrl = "mongodb://localhost:27017/jornada-fullstack-avancado";

const connectToDataBase = () => {
  return mongoose
    .connect(databaseUrl)
    .then(() => console.log("Banco de dados conectado com sucesso!"))
    .catch((error) =>
      console.log("Erro na conexao com o banco de dados. \n", error)
    );
};

const isObjectIdValid = (id) => {
  return true;
};

module.exports = {
  isObjectIdValid,
  connectToDataBase,
};
