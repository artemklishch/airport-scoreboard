import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { onSelectProps } from '../main.selectors';
import { onGetDataForDepatures, onGetDataForArrivals } from '../main.actions';
import { Link,  withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import FlightsTableData from './FlightsTableData';


const ScheduleList = (props) => {
    const { flights } = props;
    const { flightType } = useParams();
    // const [ state, onChangeState ] = useState(flights);
    // console.log(state);
    // useEffect(() => {
    //   onChangeState(flights);
      
    // }, [flightType]);
    const depBtnClass = classNames('scheduleList__links_departures', {
      'btn_on_focus': flightType === 'departure'
    });
    const arrBtnClass = classNames('scheduleList__links_arrivals', {
      'btn_on_focus': flightType === 'arrival'
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
            <Link onClick={props.onGetDataForDepatures} to='/schedule/departure' className={depBtnClass}>
              <i className="fas fa-plane-departure"></i>
            Departures
        </Link>
            <Link onClick={props.onGetDataForArrivals} to='/schedule/arrival' className={arrBtnClass}>
              <i className="fas fa-plane-arrival"></i>
            Arrivals
        </Link>
          </div>

          <FlightsTableData flightsList={flights} />
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
};

export default connect(mapState, mapDispatch)(ScheduleList);