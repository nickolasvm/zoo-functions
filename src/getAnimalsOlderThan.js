const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalsAges = species.filter((specie) =>
    (specie.name === animal)).map((array) =>
    array.residents).flat().map((array) =>
    array.age);

  const smallerAge = animalsAges.find((animalAge) => (animalAge < age));

  if (smallerAge < age) {
    return false;
  }
  return true;
}

module.exports = getAnimalsOlderThan;
