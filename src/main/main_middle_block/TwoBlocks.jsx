import React from 'react';
import { Link } from 'react-router-dom';

const MainMiddleTwoBlocks = () => {
  return (
    <section className="mainMiddleTwoBlocks">
      <div className="mainMiddleTwoBlocks__block top__info_top-row ">
        <Link to='/' className="top__link_left">
          <h2 className="top__link_header">Mastercard fast line</h2>
          <div className="link-text">
            <p>
              Take controll out of turn
            </p>
            <span className="link-text_left-message">Find out more</span>
          </div>
        </Link>
        <Link to='/' className="top__link_right">
          <h2 className="top__link_header">Info-centre</h2>
          <div className="link-text">
            <p>
              We have already covered most of the questions
            </p>
            <span className="link-text_right-message">Find answers</span>
          </div>
        </Link>
        </div>
    </section>
  );
};
export default MainMiddleTwoBlocks;