import React from 'react';

const MainMiddleFourBlock = () => {
  return (
    <section className="top__info">
        <div className="top__info_top-row">
          <a href="#" className="top__link_left">
            <h2 className="top__link_left_header">Directions to airport</h2>
            <div className="link_text">
              <p className="link_text_left">
                2 Medova str., Kyiv Terminals A, B, and D
              </p>
              <span className="link_text_left_message">Get directions</span>
            </div>  
          </a>
          <a href="#" className="top__link_right">
          <h2 className="top__link_right_header">Airline tickets</h2>
            <div className="link_text">
            <p className="link_text_right">
              Any destination. Best fares.
            </p>
            <span className="link_text_right_message">Search</span>
            </div>
          </a>
        </div>
        <div className="top__info_bottom-row">
          <a href="#" className="bottom__link_left">
            <h2 className="bottom__link_header">Parking</h2>
            <div className="link_text">
            <p className="link_text">
              Fees and guide to parking
            </p>
            <span className="link_text_left_message">Find out more</span>
            </div>       
          </a>
          <a href="#" className="bottom__link_right">
            <h2 className="bottom__link_header">Info centre</h2>
            <div className="link_text">
            <p className="link_text">
              24/7 Information at +38 (044) 364-45-14
            </p>
            <span className="link_text_right_message">Contact now</span>
            </div>
          </a>
        </div>
      </section>
  );
};
export default MainMiddleFourBlock;