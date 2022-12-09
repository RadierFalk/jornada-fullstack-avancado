const Category = require("./controller.model");

const findAll = () => {
  return Category.find().select({
    _id: true,
    name: true,
  });
};

const create = (category) => {
  return Category.create(category);
};

module.exports = {
  findAll,
  create,
};
