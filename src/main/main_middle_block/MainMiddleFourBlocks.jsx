import React from 'react';

const MainMiddleFourBlock = ({ contentData }) => {
  return (
    <section className="top__info">
      <div className="top__info_top-row">
        <a href="#" className="top__link_left">
          <h2 className="top__link_left_header">{contentData.first.header}</h2>
          <div className="link_text">
            <p className="link_text_left">{contentData.first.text}</p>
            <span className="link_text_left_message">{contentData.first.message}</span>
          </div>
        </a>
        <a href="#" className="top__link_right">
          <h2 className="top__link_right_header">{contentData.second.header}</h2>
          <div className="link_text">
            <p className="link_text_right">{contentData.second.text}</p>
            <span className="link_text_right_message">{contentData.second.message}</span>
          </div>
        </a>
      </div>
      <div className="top__info_bottom-row">
        <a href="#" className="bottom__link_left">
          <h2 className="bottom__link_header">{contentData.third.header}</h2>
          <div className="link_text">
            <p className="link_text">{contentData.third.text}</p>
            <span className="link_text_left_message">{contentData.third.message}</span>
          </div>
        </a>
        <a href="#" className="bottom__link_right">
          <h2 className="bottom__link_header">{contentData.fourth.header}</h2>
          <div className="link_text">
            <p className="link_text">{contentData.fourth.text}</p>
            <span className="link_text_right_message">{contentData.fourth.message}</span>
          </div>
        </a>
      </div>
    </section>
  );
};
export default MainMiddleFourBlock;