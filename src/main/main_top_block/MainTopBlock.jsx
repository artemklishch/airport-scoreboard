import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const MainTopBlock = () => {
  const [flightNum, onChangeFlightNum] = useState('');
  const onChangeFlightInput = event => onChangeFlightNum(event.target.value);
 
    return (
      <section className="main__top">
        <h1 className="main__top_header">Flight search</h1>
        <form action="GET" className="main__top_form">
          <i className="fas fa-search main__top_form-glass"></i>
          <input onChange={onChangeFlightInput} type="text" className="main__top_form-input" placeholder='Airline, destination or flight #' />
          <Link to={`/schedule/departure/${flightNum}`} className="main__top_form-submit" type='submit'>Search</Link>
        </form>
        <div className="main__top__btns">
          <Link to='/schedule/departure' className="main__top__btns_depatures">
            <i className="fas fa-plane-departure"></i>
            All depatures
            </Link>
          <Link to='/schedule/arrival' className="main__top__btns_arrivals">
            <i className="fas fa-plane-arrival"></i>
            All arrivals
            </Link>
        </div>
      </section>
    );
};
export default MainTopBlock;