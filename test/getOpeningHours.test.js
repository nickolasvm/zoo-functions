const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours, que recebe 2 argumentos, dia da semana (em inglês) e horas (XX:XX-AM/PM)', () => {
  it('Quando a função não recebe parâmetros, retorna objeto de dias e horários', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(actual).toEqual(expected);
  });

  it('Quando a função recebe o argumento dia da semana, mas não é dia ou não é string, retorna TypeError', () => {
    const actual = getOpeningHours(2);

    expect(actual).toThrowError();
  });
});
