const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM drivers',
  );
  return camelize(result);
};

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM drivers WHERE id = ?', [id],
  );
  return camelize(result);
};

const insert = async (newDriver) => {
  const columns = Object.keys(snakeize(newDriver))
    .join(', ');
  
  const placeholders = Object.keys(newDriver)
    .map((_m) => '?')
    .join(', ');
  
  const [{ insertId }] = await connection.execute(
    `INSERT INTO drivers (${columns}) VALUE (${placeholders})`,
    [Object.values(newDriver)],
  );
  return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};