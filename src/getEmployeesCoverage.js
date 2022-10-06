const data = require('../data/zoo_data');

const { employees, species } = data;
const paramError = 'Informações inválidas';

function filterAnimals(animalsIds) {
  return animalsIds.map((animalId) =>
    species.filter((specie) =>
      specie.id === animalId)).flat();
}

function getSpeciesNames(animalsIds) {
  const filteredAnimals = filterAnimals(animalsIds);

  return filteredAnimals.reduce((arr, animal) =>
    [...arr, animal.name], []);
}

function getSpeciesLocations(animalsIds) {
  const filteredAnimals = filterAnimals(animalsIds);

  return filteredAnimals.reduce((arr, animal) =>
    [...arr, animal.location], []);
}

function getEmployees() {
  return employees.reduce((arr, employee) => {
    const { id, firstName, lastName, responsibleFor: animalsIds } = employee;

    return [...arr, {
      id,
      fullName: `${firstName} ${lastName}`,
      species: getSpeciesNames(animalsIds),
      locations: getSpeciesLocations(animalsIds),
    }];
  }, []);
}

function getEmployeesByName(options) {
  const employeesArray = getEmployees();

  const result = employeesArray.find((employee) =>
    (employee.fullName.includes(options.name)));
  if (result === undefined) throw new Error(paramError);
  return result;
}

function getEmployeesById(options) {
  const employeesArray = getEmployees();

  const result = employeesArray.find((employee) =>
    (employee.id === options.id));
  if (result === undefined) throw new Error(paramError);
  return result;
}

function getEmployeesCoverage(options) {
  if (!options) return getEmployees();

  if ('name' in options) return getEmployeesByName(options);

  if ('id' in options) return getEmployeesById(options);

  return getEmployees();
}

module.exports = getEmployeesCoverage;
