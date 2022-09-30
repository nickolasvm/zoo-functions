const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  const animalsList = species.reduce((obj, specie) => {
    const { name, residents } = specie;
    return { ...obj, [name]: residents.length };
  }, {});

  if (!animal) return animalsList;

  const animalSpecie = species.filter((specie) =>
    animal.specie === specie.name);

  const animalQty = animalSpecie.reduce((total, curr) =>
    total + curr.residents.length, 0);

  const animalSexQty = animalSpecie.reduce((total, curr, index) =>
    total + curr.residents.filter((resident) => resident.sex === animal.sex).length, 0);

  return (Object.keys(animal).length >= 2 ? animalSexQty : animalQty);
}

// ()
// { specie: 'penguins' }
// { specie: 'bears', sex: 'female' }

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
