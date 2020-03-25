import React, { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';
import FlightsTableData from './FlightsTableData';


const ScheduleList = () => {

  const match = useRouteMatch();
  const flightData = match.path === '/schedule/:flightType'
    ? match.params.flightType
    : match.params.certainFlight;

  useEffect(() => {
   
  }, [flightData]);

  const depBtnClass = classNames('scheduleList__links_departures', {
    'btn_on_focus': flightData === 'departure' || flightData === match.params.certainFlight
  });
  const arrBtnClass = classNames('scheduleList__links_arrivals', {
    'btn_on_focus': flightData === 'arrival'
  });


  return (
    <section className="scheduleList">
      <h1 className="main__top_header__scheduleList">Flight search</h1>
      <form action="GET" className="main__top_form">
        <i className="fas fa-search main__top_form-glass"></i>
        <input type="text" className="main__top_form-input" placeholder='Airline, destination or flight #' />
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
        
      </div>

    </section>
  );
};
export default ScheduleList;