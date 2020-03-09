import React from 'react';


const ScheduleList = () => {
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
          <caption>Today</caption>
          <thead>
            <tr>
              <th>Terminal</th><th>Locale time</th><th>Destination</th><th>Status</th><th>Airline</th><th>Flight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td><td>4:45</td><td>Minsk</td><td>Departed at 4:42</td><td>Belavia</td><td>B2848</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
};
export default ScheduleList;