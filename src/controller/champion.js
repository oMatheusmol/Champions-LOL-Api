/* eslint-disable consistent-return */
/* eslint-disable no-console */
const { insertOne, findAll, deleteOne } = require('../models/champ');

const champPost = async (req, res) => {
  const champ = req.body;
  console.log(champ);
  const mandei = await insertOne(champ);
  res.status(201).send(mandei);
};

const champsGet = async (req, res) => {
  const champs = await findAll();
  res.json(champs);
};

const champDelete = async (req, res) => {
  const { name } = req.params;
  const flag = await deleteOne(name);
  if (!flag) {
    return res.send(`${name} has not found!`);
  }
  res.send(`${name} deleted.`);
};

module.exports = { champPost, champsGet, champDelete };
