import { combineReducers } from 'redux';
import app from './app';
import pokemons, { IPokemonsInitialState } from './pokemons';

export interface IInitialState {
  pokemons: IPokemonsInitialState;
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createRootReducer = () => combineReducers({ app, pokemons });

export default createRootReducer;
