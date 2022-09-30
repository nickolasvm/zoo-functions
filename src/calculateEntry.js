const data = require('../data/zoo_data');

const { prices } = data;
const { child: childPrice, adult: adultPrice, senior: seniorPrice } = prices;

function countEntrants(entrants) {
  // seu código aqui
  const ages = entrants.map((person) => person.age);
  const getNumberOfEntrants = (acc) => acc + 1;

  const child = ages.filter((age) => age < 18).reduce(getNumberOfEntrants, 0);
  const adult = ages.filter((age) => age >= 18 && age < 50).reduce(getNumberOfEntrants, 0);
  const senior = ages.filter((age) => age >= 50).reduce(getNumberOfEntrants, 0);

  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const totalValue = [countEntrants(entrants)].reduce((acc, entrant) => {
    const { child, adult, senior } = entrant;

    return (child * childPrice) + (adult * adultPrice) + (senior * seniorPrice);
  }, 0);

  return totalValue;
}

module.exports = { calculateEntry, countEntrants };
