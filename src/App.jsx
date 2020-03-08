import React from 'react';
import Header from './header/Header';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className='main'>
        <section className="main__top">
          <h1 className="main__top_header">Flight search</h1>
          <form action="GET" className="main__top_form">
          <i className="fas fa-search main__top_form-glass"></i>
          <input type="text" className="main__top_form-input" placeholder='Airline, destination or flight #' />
          <button className="main__top_form-submit" type='submit'>Search</button>
          </form>
        </section>
        
        </main>
    </div>
  );
};
export default App; 