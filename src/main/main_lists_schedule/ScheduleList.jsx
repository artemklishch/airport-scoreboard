import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { onSelectProps } from '../main.selectors';
import { onGetDataForDepatures, onGetDataForArrivals, onGetDataForCertainDepatures } from '../main.actions';
import { Link } from 'react-router-dom';
import { useParams, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import FlightsTableData from './FlightsTableData';


const ScheduleList = (props) => {
  const { flights } = props;
  const { flightType } = useParams();
  const [flightNum, onChangeFlightNum] = useState('');
  const onChangeFlightInput = event => onChangeFlightNum(event.target.value);

  const onFormSubmit = event => {
    event.preventDefault();
    props.onGetDataForCertainDepatures(flightNum);
    onChangeFlightNum('');
  }

  useEffect(() => {
    flightType === 'departure'
      ? props.onGetDataForDepatures()
      : props.onGetDataForArrivals();
  }, [flightType]);

  const depBtnClass = classNames('scheduleList__links_departures', {
    'btn_on_focus': flightType === 'departure'
  });
  const arrBtnClass = classNames('scheduleList__links_arrivals', {
    'btn_on_focus': flightType === 'arrival'
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
          <Link onClick={props.onGetDataForDepatures} to='/schedule/departure' className={depBtnClass}>
            <i className="fas fa-plane-departure"></i>
            Departures
        </Link>
          <Link onClick={props.onGetDataForArrivals} to='/schedule/arrival' className={arrBtnClass}>
            <i className="fas fa-plane-arrival"></i>
            Arrivals
        </Link>
        </div>
        {
          flights && <FlightsTableData flightsList={flights} />
        }
      </div>

    </section>
  );
};

const mapState = state => {
  return {
    flights: onSelectProps(state),
  }
};

const mapDispatch = {
  onGetDataForDepatures,
  onGetDataForArrivals,
  onGetDataForCertainDepatures,
};

export default withRouter(connect(mapState, mapDispatch)(ScheduleList));