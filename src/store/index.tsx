import { combineReducers } from 'redux';
import app from './app';
import pokemons from './pokemons';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createRootReducer = () => combineReducers({ app, pokemons });

export default createRootReducer;
