export interface IConfig {
  client: {
    server: {
      protocol: string;
      host: string;
    };
    endpoint: {
      [key: string]: {
        method: string;
        uri: {
          pathname: string;
        };
      };
    };
  };
}

export const config = {
  client: {
    server: {
      protocol: 'https',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      getPokemon: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      getPokemonTypes: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/types',
        },
      },
      // FAKE API
      createPokemon: {
        method: 'POST',
        uri: {
          pathname: '/api/v1/pokemon/create',
        },
      },
      updatePokemon: {
        method: 'PATCH',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      deletePokemon: {
        method: 'DELETE',
        uri: {
          pathname: '/api/v1/pokemon/{id}/delete',
        },
      },
    },
  },
};

export type EndpointType = keyof typeof config.client.endpoint;

export default config;
