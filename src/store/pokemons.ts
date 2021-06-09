const initialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pokemons = (state = initialState, action: { type: any; payload: any }): typeof initialState => {
  switch (action.type) {
    case 'FETCH_TYPES':
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case 'FETCH_TYPES_RESOLVE':
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case 'FETCH_TYPES_REJECT':
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default pokemons;
