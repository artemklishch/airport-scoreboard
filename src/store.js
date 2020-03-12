import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { contentReducer } from './main/main.reducers';
import thunk from 'redux-thunk';

const appStore = combineReducers({
  contentForFourBlocks: contentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  appStore,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

