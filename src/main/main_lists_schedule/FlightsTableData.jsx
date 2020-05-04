import React from 'react';
import Flight from './Flight';

const FlightsTableData = ({ flightsList }) => {
  if(flightsList === null) return null;
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
            ? flightsList.map(flight => <Flight key={flight.ID} {...flight} />)
            : <tr className="scheduleList__table__tbody_row">
              <td>No flights</td>
            </tr>
        }
      </tbody>
    </table>
  );
};
export default FlightsTableData;