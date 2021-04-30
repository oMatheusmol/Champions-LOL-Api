const database = require('../db');

const collectionName = 'champions';

const insertOne = async (model) => {
  const champion = await database.getCollection(collectionName).insertOne(model);
  return champion.ops[0];
};

const findAll = async () => {
  const champions = await database.getCollection(collectionName).find().toArray();
  return champions;
};

const deleteOne = async (name) => {
  const data = await database.getCollection(collectionName).find({ name }).toArray();
  if (!data[0]) {
    return false;
  }
  await database.getCollection(collectionName).deleteOne({ name });
  return true;
};

module.exports = { insertOne, findAll, deleteOne };
