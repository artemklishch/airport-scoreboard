import React from 'react';
import CompilatingComp from './CompilatingComp';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <CompilatingComp />
      </Provider>
    </BrowserRouter>
  );
};
export default App;