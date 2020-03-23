import React from 'react';
import { Link } from 'react-router-dom';

const FourBlocks = ({ contentData }) => {
  return (
    <section className="top__info">
      <div className="top__info_top-row">
        <Link to='/' className="top__link_left">
          <h2 className="top__link_left_header">{contentData.first.header}</h2>
          <div className="link-text">
            <p className="link-text_left">{contentData.first.text}</p>
            <span className="link-text_left-message">{contentData.first.message}</span>
          </div>
        </Link>
        <Link to='/' className="top__link_right">
          <h2 className="top__link_right_header">{contentData.second.header}</h2>
          <div className="link-text">
            <p className="link-text_right">{contentData.second.text}</p>
            <span className="link-text_right-message">{contentData.second.message}</span>
          </div>
        </Link>
      </div>
      <div className="top__info_bottom-row">
        <Link to='/' className="bottom__link_left">
          <h2 className="bottom__link_header">{contentData.third.header}</h2>
          <div className="link-text">
            <p >{contentData.third.text}</p>
            <span className="link-text_left-message">{contentData.third.message}</span>
          </div>
        </Link>
        <Link to='/' className="bottom__link_right">
          <h2 className="bottom__link_header">{contentData.fourth.header}</h2>
          <div className="link-text">
            <p>{contentData.fourth.text}</p>
            <span className="link-text_right-message">{contentData.fourth.message}</span>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default FourBlocks;