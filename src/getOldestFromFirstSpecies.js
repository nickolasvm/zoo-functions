const data = require('../data/zoo_data');

const { employees, species } = data;

function getEmployee(id) {
  return employees.find((employee) => employee.id === id);
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalId = getEmployee(id).responsibleFor[0];
  const { residents } = species.find((specie) => specie.id === animalId);
  return residents.reduce((acc, resident) => {
    const { name, sex, age } = resident;

    if (age > acc[2]) return [name, sex, age];

    return acc;
  }, ['name', 'sex', 0]);
}

module.exports = getOldestFromFirstSpecies;
