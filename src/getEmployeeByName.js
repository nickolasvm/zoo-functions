const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') return {};

  return employees.find((employee) => {
    const { firstName, lastName } = employee;
    return (firstName === employeeName || lastName === employeeName);
  });
}

module.exports = getEmployeeByName;
