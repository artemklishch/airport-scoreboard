import React, { useEffect } from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import ScheduleList from './main/main_lists_schedule/ScheduleList';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { onGetDataFromServer } from './main/main.actions';


const CompilatingComp = (props) => {
  useEffect(() => {
    const onGetData = () => {
      console.log('sadasdasdasdasd');
    };
    document.addEventListener('DOMContentLoaded', onGetData);
  });
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

const mapState = (state) => {
  return {
    flights: state.flightsData.flights,
  }
};

const mapDispatch = { onGetDataFromServer };

export default connect(mapState, mapDispatch)(CompilatingComp); 