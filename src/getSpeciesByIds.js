const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return ids;
  // return ids;
}

// console.log(getSpeciesByIds(data.species));
console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
