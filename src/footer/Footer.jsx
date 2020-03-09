import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info-links">
        <div className="footer__info-links__links-block">
          <h5 className="footer__info-links__links-block_title">For passengers</h5>
          <ul className="footer__info-links__links-block_list">
            <li className="footer__info-links__links-block_item"><a href="#">Flight schedule</a></li>
            <li className="footer__info-links__links-block_item"><a href="#">Services</a></li>
            <li className="footer__info-links__links-block_item"><a href="#">Contacts</a></li>
            <li className="footer__info-links__links-block_item"><a href="#">Privacy policy</a></li>
            <li className="footer__info-links__links-block_item"><a href="#">Site map</a></li>
          </ul>
        </div>
        <div className="footer__info-links__links-block">
          <h5 className="footer__info-links__links-block_title">Corporate</h5>
          <ul className="footer__info-links__links-block_list">
            <li className="footer__info-links__links-block_item"><a href="#">Main page</a></li>
            <li className="footer__info-links__links-block_item"><a href="#">Ground Handling</a></li>
            <li className="footer__info-links__links-block_item"><a href="#">Airport Characteristics</a></li>
            <li className="footer__info-links__links-block_item"><a href="#">Education center</a></li>
            <li className="footer__info-links__links-block_item"><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer__info-links__links-block">
          <h5 className="footer__info-links__links-block_title">Press centre</h5>
          <ul className="footer__info-links__links-block_list">
            <li className="footer__info-links__links-block_item"><a href="#">Main page</a></li>
            <li className="footer__info-links__links-block_item"><a href="#">Latest news</a></li>
            <li className="footer__info-links__links-block_item"><a href="#">Social &#38 art projects</a></li>
            <li className="footer__info-links__links-block_item"><a href="#">Financial reports</a></li>
            <li className="footer__info-links__links-block_item"><a href="#">Traffic statistics</a></li>
          </ul>
        </div>
      </div>


      <div className="footer__connect-links">
        <div className="footer__connect-links__phone">
          <h5 className="footer__connect-links__phone_title">Call information</h5>
          <p><a href="#">+38 (044) 364-45-14</a></p>
        </div>
        <div className="footer__connect-links__social-links">
        <h5 className="footer__connect-links__phone_title">Follow us</h5>
          <p>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </p>
        </div>
      </div>


      <div className="footer__bottom-links">
        <div className="footer__bottom-links_copyrights">
          <p>&#169; 2011-2020</p>
          <p>'Kyiv' International Airport</p>
          <p><a href="#">Part of Ufuture Investment Group</a></p>
        </div>
        <div className="footer__bottom-links_developed">
          <p>Developed by</p>
          <p><a href="#">smp/solutions</a></p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;