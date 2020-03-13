import React, { useState, useEffect } from 'react';
import { Link, withRouter, useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';
import { onGetDataAboutFlights, onChangeAnswer } from '../main.gateway';
import FlightsTableData from './FlightsTableData';


const ScheduleList = (props) => {
  const match = useRouteMatch();
  const flightData = match.path === "/schedule/:flightType"
    ? match.params.flightType
    : match.params.certainFlight;
  const [flightsList, onChangeFlightsList] = useState([]);
  useEffect(() => {
    if (match.path === "/schedule/:flightType") {
      onGetDataAboutFlights()
        .then(flights => {
          const fl = flightData === 'departure'
            ? flights.body.departure
            : flights.body.arrival;
          const transform = onChangeAnswer(fl);
          onChangeFlightsList(transform);
        });
    } else {
      onGetDataAboutFlights()
        .then(flights => {
          const fl = flights.body.departure;
          const transform = onChangeAnswer(fl)
            .filter(departureFlight => departureFlight.flightNum === flightData);
          onChangeFlightsList(transform)
        });
    }
    return () => {
      onChangeFlightsList([]);
    };
  }, [flightData]);

  const [flightNum, onChangeFlightNum] = useState('');
  const onChangeFlightInput = event => onChangeFlightNum(event.target.value);

  const formSubmit = event => {
    event.preventDefault();
    if(flightNum !== ''){
      return props.history.push(`/schedule/departure/${flightNum}`);
    }else return; 
  };

  const depBtnClass = classNames('scheduleList__links_departures', {
    'btn_on_focus': flightData === 'departure' || match.path === "/schedule/departure/:certainFlight"
  });
  const arrBtnClass = classNames('scheduleList__links_arrivals', {
    'btn_on_focus': flightData === 'arrival'
  });
  return (
    <section className="scheduleList">
      <h1 className="main__top_header__scheduleList">Flight search</h1>
      <form onSubmit={formSubmit} action="GET" className="main__top_form">
        <i className="fas fa-search main__top_form-glass"></i>
        <input onChange={onChangeFlightInput} type="text" className="main__top_form-input" placeholder='Airline, destination or flight #' />
        <button className="main__top_form-submit" type='submit'>Search</button>
      </form>

      <div className="scheduleList__data">
        <div className="scheduleList__links">
          <Link to='/schedule/departure' className={depBtnClass}>
            <i className="fas fa-plane-departure"></i>
            Departures
        </Link>
          <Link to='/schedule/arrival' className={arrBtnClass}>
            <i className="fas fa-plane-arrival"></i>
            Arrivals
        </Link>
        </div>
        <FlightsTableData flightsList={flightsList} />
      </div>
    </section>
  );
};
export default withRouter(ScheduleList);