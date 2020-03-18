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
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/airport_scoreboard' : '/'}>
      <Provider store={store}>
        <div className="wrapper">
          <Switch>
            <Route exact path='/'>
              <Header />
              <Main />
              <Footer />
            </Route>
            <Route exact path='/schedule/:flightType'>
              <Header />
              <ScheduleList />
              <Footer />
            </Route>
            <Route path='/schedule/departure/:certainFlight'>
              <Header />
              <ScheduleList />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
};
export default App; 