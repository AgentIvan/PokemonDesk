import { Dispatch } from 'react';
import { EndpointType } from '../config';
import req from '../utils/request';

export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

interface ITypesAction {
  type: PokemonsActionTypes;
  payload?: string[];
}

export type ITypesRequest = string[];

export type ActionTypes = ITypesAction;

export interface IStateRequest<T> {
  isLoading: boolean;
  data?: null | T[];
  error?: null | T[];
}
export interface IPokemonsInitialState {
  types: IStateRequest<string>;
}

const initialState: IPokemonsInitialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const pokemons = (state = initialState, action: ActionTypes): typeof initialState => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
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

export const getTypesAction = (endpoint: EndpointType) => {
  return async (dispatch: Dispatch<ActionTypes>): Promise<void> => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<ITypesRequest>(endpoint);
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response });
    } catch (error) {
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_REJECT, payload: error });
    }
  };
};

export interface IInitialState {
  pokemons: IPokemonsInitialState;
}

export const getPokemonsTypes = (state: IInitialState): string[] | null | undefined => state.pokemons.types.data;
export const getPokemonsTypesLoading = (state: IInitialState): boolean => state.pokemons.types.isLoading;

export default pokemons;
