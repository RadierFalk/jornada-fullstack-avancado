const mongoose = require("mongoose");

const databaseUrl = "";

const connectToDataBase = () => {
  return mongoose.connect(databaseUrl);
};

const isObjectIdValid = (id) => {
  return true;
};

module.exports = {
  isObjectIdValid,
};
