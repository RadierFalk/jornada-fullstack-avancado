const Item = require("./item.model");
const ObjectId = require("mongoose").Types.ObjectId;

const findAll = () => {
  return Item.find().select("_id name imageUrl");
};

const findById = (id) => {
  const ObjectId = new Object(id);
  return Item.findById(ObjectId);
};

const create = (item) => {
  return Item.create(item);
};

const update = (id, item) => {
  const ObjectId = new ObjectId(id);
  return Item.findByIdAndUpdate(ObjectId, item);
};
const deleteById = (id) => {
  const ObjectId = new ObjectId(id);
  return Item.findByIdAndDelete(ObjectId);
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  deleteById,
};
