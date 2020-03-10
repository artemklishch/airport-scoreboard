import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { contentReducer } from './main/main.reducers';
import thunk from 'redux-thunk';

const appStore = combineReducers({
  contentForFourBlocks: contentReducer
});



export default createStore(
  appStore,

);

