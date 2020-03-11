import React from 'react';
import { connect } from 'react-redux';


const ScheduleList = (props) => {
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
          <a href="#" className="scheduleList__links_departures">
            <i className="fas fa-plane-departure"></i>
            Departures
        </a>
          <a href="#" className="scheduleList__links_arrivals">
            <i className="fas fa-plane-arrival"></i>
            Arrivals
        </a>
        </div>

        <table className="scheduleList__table">
          <caption className="scheduleList__table_caption">Today</caption>
          <thead className="scheduleList__table_thead">
            <tr>
              <th>Terminal</th><th>Locale time</th><th>Destination</th><th>Status</th><th>Airline</th><th>Flight</th>
            </tr>
          </thead>
          <tbody className="scheduleList__table__tbody">
            <tr className="scheduleList__table__tbody_row">
              <td className="scheduleList__table__tbody_terminal">A</td>
              <td className="scheduleList__table__tbody_planned-time">4:45</td>
              <td className="scheduleList__table__tbody_destintion">Minsk</td>
              <td className="scheduleList__table__tbody_fact-time">Departed at 4:42</td>
              <td className="scheduleList__table__tbody_airline">Belavia</td>
              <td className="scheduleList__table__tbody_flight">B2848</td>

              <td className="scheduleList__table__tbody_terminal-planned-time_onsmallwidth">
                <p>A</p>
                <p>4:45</p>
              </td>
              <td className="scheduleList__table__tbody_onsmall-width">
                <p>Minsk</p>
                <p>Departed at 4:42</p>
                <p>Belavia</p>
              </td>
            </tr>
            {/* <tr className="scheduleList__table__tbody_row">
              <td className="scheduleList__table__tbody_terminal">B</td>
              <td className="scheduleList__table__tbody_planned-time">5:50</td>
              <td className="scheduleList__table__tbody_destintion">Viena</td>
              <td className="scheduleList__table__tbody_fact-time">Departed at 6:42</td>
              <td className="scheduleList__table__tbody_airline">Anralia</td>
              <td className="scheduleList__table__tbody_flight">B5648</td>

              <td className="scheduleList__table__tbody_terminal-planned-time_onsmallwidth">
                <p>B</p>
                <p>5:50</p>
              </td>
              <td className="scheduleList__table__tbody_onsmall-width">
                <p>Viena</p>
                <p>Departed at 6:42</p>
                <p>Anralia</p>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>

    </section>
  );
};

const mapState = state => {
  return {
    depaturedFlights: state.flightsData.flights,
  }
};

export default connect(mapState)(ScheduleList);