import React from 'react';
import moment from 'moment';

const FlightsTableData = ({flightsList}) => {
  return (
    <table className="scheduleList__table">
          <caption className="scheduleList__table_caption">Today</caption>
          <thead className="scheduleList__table_thead">
            <tr>
              <th>Terminal</th><th>Locale time</th><th>Destination</th><th>Status</th><th>Airline</th><th>Flight</th>
            </tr>
          </thead>
          <tbody className="scheduleList__table__tbody">
            {
              flightsList.length !== 0
              ? flightsList.map(flight => {
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
              : <tr className="scheduleList__table__tbody_row">
                <td>No flights</td>
              </tr>
            }
          </tbody>
        </table>
  );
};
export default FlightsTableData;