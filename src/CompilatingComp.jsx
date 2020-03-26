import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import ScheduleList from './main/main_lists_schedule/ScheduleList';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { onGetDataFromServer } from './main/main.actions';
import { flightsSelectorOnDepature, flightsSelectorOnArrival } from './main/main.selectors';


const CompilatingComp = (props) => {
  document.addEventListener('DOMContentLoaded', props.onGetDataFromServer);
  // if(!props.flightsDepature) return null;
  return (
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
  );
};

// const mapState = (state) => {
//   return {
//     flightsDepature: flightsSelectorOnDepature(state),
//     flightsArrival: flightsSelectorOnArrival(state),
//   }
// };

const mapDispatch = { onGetDataFromServer };

export default connect(null, mapDispatch)(CompilatingComp); 