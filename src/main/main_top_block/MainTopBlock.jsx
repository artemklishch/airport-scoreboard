import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onGetDataForDepatures, onGetDataForArrivals } from '../main.actions';

const MainTopBlock = (props) => {
  return (
    <section className="main__top">
      <h1 className="main__top_header">Flight search</h1>
      <form action="GET" className="main__top_form">
        <i className="fas fa-search main__top_form-glass"></i>
        <input type="text" className="main__top_form-input" placeholder='Airline, destination or flight #' />
        <button className="main__top_form-submit" type='submit'>Search</button>
      </form>
      <div className="main__top__btns">
        <Link onClick={props.onGetDataForDepatures} to='/schedule/departure' className="main__top__btns_depatures">
          <i className="fas fa-plane-departure"></i>
          All depatures
          </Link>
        <Link onClick={props.onGetDataForArrivals} to='/schedule/arrival' className="main__top__btns_arrivals">
          <i className="fas fa-plane-arrival"></i>
          All arrivals
          </Link>
      </div>
    </section>
  );
};

const mapDispatch = {
  onGetDataForDepatures, 
  onGetDataForArrivals,
};

export default connect(null, mapDispatch)(MainTopBlock);