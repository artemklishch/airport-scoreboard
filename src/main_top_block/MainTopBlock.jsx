import React from 'react';

const MainTop = () => {
  return (
    <section className="main__top">
      <h1 className="main__top_header">Flight search</h1>
      <form action="GET" className="main__top_form">
        <i className="fas fa-search main__top_form-glass"></i>
        <input type="text" className="main__top_form-input" placeholder='Airline, destination or flight #' />
        <button className="main__top_form-submit" type='submit'>Search</button>
      </form>
      <div className="main__top__btns">
        <button className="main__top__btns_depatures">
          <i className="fas fa-plane-departure"></i>
          All depatures
          </button>
        <button className="main__top__btns_arrivals">
          <i className="fas fa-plane-arrival"></i>
          All arrivals
          </button>
      </div>
    </section>
  );
};
export default MainTop;