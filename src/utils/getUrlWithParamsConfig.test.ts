import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Should resive "getPokemons" & {}.\n    Should return {method: "GET", uri:{pn, p, h, query: {}}, body: {}}', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});
    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });
  test('Should resive "getPokemons" & {name: "Pikachu"}.\n    {method: "GET", uri:{pn, p, h, query: {name}}, body: {}}', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });
    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });
  test('Should resive "getPokemon" & {id: 25}.\n    Should return {method: "GET", uri:{pn, p, h, query: {}}, body: {}}', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });
    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });
  test('Should resive "createPokemon" & {name: "Pikachu"}.\n    Should return {method: "POST", uri:{pn, p, h, query: {}}, body: {name: "Pikachu"}}', () => {
    const url = getUrlWithParamsConfig('createPokemon', { name: 'Pikachu' });
    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/create',
        query: {},
      },
      body: { name: 'Pikachu' },
    });
  });
  test('Should resive "updatePokemon" & {id: 25, name: "Raichu"}.\n    Should return {method: "PATCH", uri:{pn, p, h, query: {}}, body: {id: 25, name: "Raichu"}}', () => {
    const url = getUrlWithParamsConfig('updatePokemon', { id: 25, name: 'Raichu' });
    expect(url).toEqual({
      method: 'PATCH',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {
        id: 25,
        name: 'Raichu',
      },
    });
  });
  test('Should resive "deletePokemon" & {id: 25}.\n    Should return {method: "DELETE", uri:{pn, p, h, query: {}}, body: {id: 25}}', () => {
    const url = getUrlWithParamsConfig('deletePokemon', { id: 25 });
    expect(url).toEqual({
      method: 'DELETE',
      uri: {
        protocol: 'https',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25/delete',
        query: {},
      },
      body: { id: 25 },
    });
  });
});
