const data = require('../data/zoo_data');

const { employees } = data;

const managersId = employees.map((employee) => employee.managers).flat();

function isManager(id) {
  // seu código aqui
  const findManager = managersId.find((managerId) => id === managerId);
  return typeof findManager !== 'undefined';
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const relatedEmployees = employees.filter((employee) =>
    employee.managers.find((manager) => manager === managerId));

  const relatedEmployessNames = relatedEmployees.map((employee) =>
    `${employee.firstName} ${employee.lastName}`);

  return relatedEmployessNames;
}

module.exports = { isManager, getRelatedEmployees };
