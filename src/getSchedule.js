const data = require('../data/zoo_data');

const { hours: weeklyHours, species } = data;
const weekDays = Object.keys(weeklyHours);

function getAvaibleAnimals(weekDay) {
  return species
    .filter((specie) =>
      specie.availability.find((avaibleDay) => avaibleDay === weekDay))
    .reduce((arr, avaibleAnimal) => [...arr, avaibleAnimal.name], []);
}

function getOfficeHours() {
  return weekDays.reduce((obj, weekDay) => {
    const { open, close } = weeklyHours[weekDay];
    return weekDay !== 'Monday'
      ? {
        ...obj,
        [weekDay]: {
          officeHour: `Open from ${open}am until ${close}pm`,
          exhibition: getAvaibleAnimals(weekDay),
        },
      }
      : {
        ...obj,
        [weekDay]: {
          officeHour: 'CLOSED',
          exhibition: 'The zoo will be closed!',
        },
      };
  }, {});
}

function getAnimalSchedule(animal) {
  return species.filter((specie) => specie.name === animal)[0].availability;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const isAnimal = typeof species.find((specie) => specie.name === scheduleTarget)
    !== 'undefined';

  const isDay = typeof weekDays.find((weekDay) => weekDay === scheduleTarget)
    !== 'undefined';

  switch (true) {
  case isAnimal:
    return getAnimalSchedule(scheduleTarget);
  case isDay:
    return { [scheduleTarget]: getOfficeHours()[scheduleTarget] };
  default:
    return getOfficeHours();
  }
}

module.exports = getSchedule;
