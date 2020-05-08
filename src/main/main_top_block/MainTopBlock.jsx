import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

const MainTopBlock = (props) => {
  const [flightNum, onChangeFlightNum] = useState('');
  const onChangeFlightInput = event => onChangeFlightNum(event.target.value);

  const onFormSubmit = event => {
    event.preventDefault();
    onChangeFlightNum('');
    if(flightNum !== ''){
      return props.history.push(`/schedule/departure/${flightNum}`);
    }else return; 
  };
  
  return (
    <section className="main__top">
      <h1 className="main__top_header">Flight search</h1>
      <form onSubmit={onFormSubmit} action="GET" className="main__top_form">
        <i className="fas fa-search main__top_form-glass"></i>
        <input onChange={onChangeFlightInput} type="text" className="main__top_form-input" placeholder='Airline, destination or flight #' value={flightNum} />
        <button className="main__top_form-submit" type='submit'>Search</button>
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
export default withRouter(MainTopBlock);