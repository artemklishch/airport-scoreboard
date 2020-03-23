import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import ScheduleList from './main/main_lists_schedule/ScheduleList';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="wrapper">
        <Header />
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/schedule/:flightType'>
              <ScheduleList />
            </Route>
            <Route path='/schedule/departure/:certainFlight'>
              <ScheduleList />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
};
export default App; 