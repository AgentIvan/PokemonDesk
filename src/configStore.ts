/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, applyMiddleware, compose, createStore, Store, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from './store';

const enhancers: StoreEnhancer[] = [];
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const configureStore = (preloadedState = {}): Store<unknown, Action<any>> =>
  createStore(createRootReducer(), preloadedState, compose(applyMiddleware(thunk), ...enhancers));

export default configureStore;
