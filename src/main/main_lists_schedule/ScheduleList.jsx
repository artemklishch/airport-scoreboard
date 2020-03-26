import React, {useState} from 'react';
import { Link, useRouteMatch, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import FlightsTableData from './FlightsTableData';
import { flightsSelectorOnDepature, flightsSelectorOnArrival } from '../main.selectors';
import { connect } from 'react-redux';


const ScheduleList = (props) => {
  const [flightNum, onChangeFlightNum] = useState('');
  const onChangeFlightInput = event => onChangeFlightNum(event.target.value);

  const onFormSubmit = event => {
    event.preventDefault();
    onChangeFlightNum('');
    if(flightNum !== ''){
      return props.history.push(`/schedule/departure/${flightNum}`);
    }else return; 
  };

  const match = useRouteMatch();
  const flightTypeOrNum = match.path === '/schedule/:flightType'
    ? match.params.flightType
    : match.params.certainFlight;
  const flightsDataForRender = flightTypeOrNum === 'departure'
    ? props.flightsDepature
    : flightTypeOrNum === 'arrival'
    ? props.flightsArrival
    : props.flightsDepature.filter(flight => flight.flightNum === match.params.certainFlight);

  const depBtnClass = classNames('scheduleList__links_departures', {
    'btn_on_focus': flightTypeOrNum === 'departure' || flightTypeOrNum === match.params.certainFlight
  });
  const arrBtnClass = classNames('scheduleList__links_arrivals', {
    'btn_on_focus': flightTypeOrNum === 'arrival'
  });

  return (
    <section className="scheduleList">
      <h1 className="main__top_header__scheduleList">Flight search</h1>
      <form onSubmit={onFormSubmit} action="GET" className="main__top_form">
        <i className="fas fa-search main__top_form-glass"></i>
        <input onChange={onChangeFlightInput} type="text" className="main__top_form-input" placeholder='Airline, destination or flight #' value={flightNum} />
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
        <FlightsTableData flightsList={flightsDataForRender} />
      </div>

    </section>
  );
};

const mapState = (state) => {
  return {
    flightsDepature: flightsSelectorOnDepature(state),
    flightsArrival: flightsSelectorOnArrival(state),
  }
};
export default withRouter(connect(mapState)(ScheduleList));