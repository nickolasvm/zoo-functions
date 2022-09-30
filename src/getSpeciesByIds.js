const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return ids;
  return ids.map((id) => species.filter((specie) => (specie.id === id))).flat();
}

module.exports = getSpeciesByIds;
