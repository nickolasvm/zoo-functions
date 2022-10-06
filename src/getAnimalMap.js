const data = require('../data/zoo_data');

const { species } = data;

function filterAnimals(location) {
  const filteredAnimals = species.filter((specie) =>
    specie.location === location);

  return filteredAnimals.reduce((arr, animal) =>
    [...arr, animal.name], []);
}

function filterAnimalsAndResidents(location, sex, sorted) {
  const filteredAnimals = species.filter((specie) =>
    specie.location === location);

  return filteredAnimals.reduce((animalArr, animal) => {
    const { name, residents } = animal;
    let animalNames;

    if (sex === 'male' || sex === 'female') {
      const filteredSex = residents.filter((resident) => resident.sex === sex);
      animalNames = filteredSex.reduce((resArr, resident) => [...resArr, resident.name], []);
    } else {
      animalNames = residents.reduce((resArr, resident) => [...resArr, resident.name], []);
    }

    if (sorted) return [...animalArr, { [name]: animalNames.sort() }];

    return [...animalArr, { [name]: animalNames }];
  }, []);
}

function getAnimalsLocations(bool, sex, sorted) {
  if (bool) {
    return species.reduce((obj, specie) => {
      const { location } = specie;

      return { ...obj, [location]: filterAnimalsAndResidents(location, sex, sorted) };
    }, {});
  }

  return species.reduce((obj, specie) => {
    const { location } = specie;

    return { ...obj, [location]: filterAnimals(location) };
  }, {});
}

function checkParameter(param) {
  switch (typeof param) {
  case 'object':
    return true;
  default:
    return false;
  }
}

function getAnimalMap(options) {
  // seu código aqui
  if (!checkParameter(options) || !('includeNames' in options) || options.includeNames === false) {
    return getAnimalsLocations(false);
  }

  const { sex, sorted } = options;
  return getAnimalsLocations(true, sex, sorted);
}

module.exports = getAnimalMap;
