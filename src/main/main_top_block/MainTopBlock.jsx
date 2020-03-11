import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onGetDeparturedFlights } from '../main.actions';

const MainTopBlock = () => {
  return (
    <section className="main__top">
      <h1 className="main__top_header">Flight search</h1>
      <form action="GET" className="main__top_form">
        <i className="fas fa-search main__top_form-glass"></i>
        <input type="text" className="main__top_form-input" placeholder='Airline, destination or flight #' />
        <button className="main__top_form-submit" type='submit'>Search</button>
      </form>
      <div className="main__top__btns">
        <Link to='/schedule' className="main__top__btns_depatures">
          <i className="fas fa-plane-departure"></i>
          All depatures
          </Link>
        <Link to='/schedule' className="main__top__btns_arrivals">
          <i className="fas fa-plane-arrival"></i>
          All arrivals
          </Link>
      </div>
    </section>
  );
};

// const mapState = state => {
//   return {
//     depaturedFlights: 
//   }
// };

export default connect()(MainTopBlock);