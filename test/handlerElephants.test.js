const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Quando a função não recebe parâmetros, retorna undefined', () => {
    const actual = handlerElephants();

    expect(actual).toBeUndefined();
  });

  it('Quando o parâmetro não é uma string, retorna frase de alerta', () => {
    const actual1 = handlerElephants(2);
    const actual2 = handlerElephants(['hi']);
    const expected = 'Parâmetro inválido, é necessário uma string';

    expect(actual1).toBe(expected);
    expect(actual2).toBe(expected);
  });

  it('Quando o parâmetro não estiver em letra minúscula ou não for um dos argumentos especificados, retorna null', () => {
    const actual1 = handlerElephants('NAMES');
    const actual2 = handlerElephants('dates');

    expect(actual1).toBeNull();
    expect(actual2).toBeNull();
  });

  it('Quando argumento for "count", retorna o número de elefantes', () => {
    const actual = handlerElephants('count');

    expect(actual).toBe(4);
  });

  it('Quando argumento for "names", retorna os nomes dos elefantes em array, e um deles deve ser Jefferson', () => {
    const actual = handlerElephants('names');
    const expected = 'Jefferson';

    expect(actual).toContain(expected);
  });

  it('Quando argumento for "averageAge", retorna a média das idades dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;

    expect(actual).toBe(expected);
  });

  it('Quando argumento for "location", retorna a localização dos elefantes', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';

    expect(actual).toBe(expected);
  });

  it('Quando argumento for "popularity", retorna a localização dos elefantes', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;

    expect(actual).toBe(expected);
  });

  it('Quando argumento for "availability", retorna, em array, os diasem que os elefantes estão disponíveis para visitação', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];

    expect(actual).toEqual(expected);
  });
});
