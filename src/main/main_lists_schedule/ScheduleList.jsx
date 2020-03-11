import React from 'react';
import { connect } from 'react-redux';
import { onSelectProps } from '../main.selectors';
import moment from 'moment';
import { onGetDataForDepatures, onGetDataForArrivals } from '../main.actions';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const ScheduleList = (props) => {
  const { flights } = props;
  console.log(props);
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
          <Link onClick={props.onGetDataForDepatures} to='/schedule/depatures' className="scheduleList__links_departures">
            <i className="fas fa-plane-departure"></i>
            Departures
        </Link>
          <Link onClick={props.onGetDataForArrivals} to='/schedule/arrivals' className="scheduleList__links_arrivals">
            <i className="fas fa-plane-arrival"></i>
            Arrivals
        </Link>
        </div>

        <table className="scheduleList__table">
          <caption className="scheduleList__table_caption">Today</caption>
          <thead className="scheduleList__table_thead">
            <tr>
              <th>Terminal</th><th>Locale time</th><th>Destination</th><th>Status</th><th>Airline</th><th>Flight</th>
            </tr>
          </thead>
          <tbody className="scheduleList__table__tbody">
            {
              flights.map(flight => {
                return <tr key={flight.ID} className="scheduleList__table__tbody_row">
                  <td className="scheduleList__table__tbody_terminal">{flight.term}</td>
                  <td className="scheduleList__table__tbody_planned-time">{moment(flight.expectedTime).format('h:mm')}</td>
                  <td className="scheduleList__table__tbody_destintion">{flight.airport}</td>
                  <td className="scheduleList__table__tbody_fact-time">{`Departed at ${moment(flight.realTime).format('h:mm')}`}</td>
                  <td className="scheduleList__table__tbody_airline">{flight.airline}</td>
                  <td className="scheduleList__table__tbody_flight">{flight.flightNum}</td>

                  <td className="scheduleList__table__tbody_terminal-planned-time_onsmallwidth">
                    <p>{flight.term}</p>
                    <p>{flight.realTime}</p>
                  </td>
                  <td className="scheduleList__table__tbody_onsmall-width">
                    <p>{flight.airport}</p>
                    <p>{`Departed at ${flight.expectedTime}`}</p>
                    <p>{flight.airline}</p>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
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