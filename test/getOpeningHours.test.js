const getOpeningHours = require('../src/getOpeningHours');

// receive day (Tuesday, Monday etc) and hour (XX:XX-XM)[XM = AM ou PM];
// ('Tuesday', '12:43-PM');

describe('Testes da função getOpeningHours, que recebe 2 argumentos, dia da semana (em inglês) e horas (XX:XX-AM/PM)', () => {
  it('Quando não recebe parâmetros, retorna objeto de dias e horários', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 }
    };

    expect(actual).toEqual(expected);
  });

  it('Quando o dia for segunda-feira (Monday), retorna "the zoo is closed", idependente do horário', () => {
    const firstActual = getOpeningHours('Monday', '09:00-PM');
    const secondActual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';

    expect(firstActual).toEqual(expected);
    expect(secondActual).toEqual(expected);
  });

  it('Quando o dia for Terça-feira (Tuesday) e horário for 9AM, retorna "the zoo is open"', () => {
    const firstActual = getOpeningHours('Tuesday', '09:00-PM');
    const secondActual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';

    expect(firstActual).not.toEqual(expected);
    expect(secondActual).toEqual(expected);
  });

  it('Quando o dia não estiver em inglês ou não for um dia da semana válido, dispara erro', () => {
    const error = 'The day must be valid. Example: Monday';

    expect(() => {
      getOpeningHours('dog', '09:00-PM');
    }).toThrow(error);
    expect(() => {
      getOpeningHours('Terça-feira', '09:00-PM');
    }).toThrow(error);
  });

  it('Se as horas ou minutos passados não forem um número, dispara erro', () => {
    const hoursError = 'The hour should represent a number';
    const minutesError = 'The minutes should represent a number';

    expect(() => {
      getOpeningHours('Tuesday', 'xx:00-PM');
    }).toThrow(hoursError);
    expect(() => {
      getOpeningHours('Tuesday', '09:xx-PM');
    }).toThrow(minutesError);
  });

  it('Se a abreviação das horas não for "AM" ou "PM", dispara erro', () => {
    const error = 'The abbreviation must be \'AM\' or \'PM\'';

    expect(() => {
      getOpeningHours('Tuesday', '09:00-xx');
    }).toThrow(error);
  });

  it('Se as horas não estiverem entre 0 e 12, dispara erro', () => {
    const error = 'The hour must be between 0 and 12';

    expect(() => {
      getOpeningHours('Tuesday', '22:00-PM');
    }).toThrow(error);
  });

  it('Se os minutos não estiverem entre 0 e 59, dispara erro', () => {
    const error = 'The minutes must be between 0 and 59';

    expect(() => {
      getOpeningHours('Tuesday', '09:75-PM');
    }).toThrow(error);
  });
});
