import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
};
export default App; 