const service = require("./item.service");
const { isObjectIdValid } = require("../db/database.helper");

const findAll = async (req, res) => {
  const itens = await service.findAll();
  res.send(itens);
};

const findById = async (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "ID inválido!" });
  }

  const item = await service.findById(id);

  if (!item) {
    return res.status(404).send({ message: "ID não encontrado!" });
  }
  res.send(item);
};

const create = async (req, res) => {
  const item = req.body;

  if (!item || !item.name || !item.imageUrl || !item.category) {
    return res.status(400).send({ message: "Dados invalidos" });
  }

  const newItem = await service.create(item);

  res.status(201).send(newItem);
};

const update = async (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "Dados inválidos!" });
  }

  const updateItem = await service.update(id, item);

  if (!updateItem) {
    return res.status(404).send({ message: "Item não encontrado!" });
  }

  res.send({ message: "Item atualizado com sucesso!" });
};

const deleteById = async (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "Item não encontrado!" });
  }

  const deleteItem = await service.deleteById(id);

  if (!deleteItem) {
    return res.status(404).send({ message: "Item não encontrado!" });
  }
  res.send({ message: "Item excluído com sucesso!" });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  deleteById,
};
