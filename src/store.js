import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { contentReducer, contentFlightsReducer } from './main/main.reducers';
import thunk from 'redux-thunk';

const appStore = combineReducers({
  contentForFourBlocks: contentReducer,
  flightsData: contentFlightsReducer, 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  appStore,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

