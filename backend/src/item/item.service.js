const Item = require("./item.model");

const findAll = () => {
  return Item.find();
};

module.exprots = {
  findAll,
};
