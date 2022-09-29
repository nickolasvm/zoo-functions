const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return ids;
  // return species.filter((specie) => {
  //   console.log(ids);
  //   console.log(specie.id);
  // });
}

// console.log(getSpeciesByIds(data.species));
console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));

module.exports = getSpeciesByIds;
