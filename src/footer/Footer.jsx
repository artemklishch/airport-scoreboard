import React from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info-links">
        <div className="footer__info-links__links-block">
          <h5 className="footer__info-links__links-block_title">For passengers</h5>
          <ul className="footer__info-links__links-block_list">
            <li className="footer__info-links__links-block_item"><Link to='/'>Flight schedule</Link></li>
            <li className="footer__info-links__links-block_item"><Link to='/'>Services</Link></li>
            <li className="footer__info-links__links-block_item"><Link to='/'>Contacts</Link></li>
            <li className="footer__info-links__links-block_item"><Link to='/'>Privacy policy</Link></li>
            <li className="footer__info-links__links-block_item"><Link to='/'>Site map</Link></li>
          </ul>
        </div>
        <div className="footer__info-links__links-block">
          <h5 className="footer__info-links__links-block_title">Corporate</h5>
          <ul className="footer__info-links__links-block_list">
            <li className="footer__info-links__links-block_item"><Link to='/'>Main page</Link></li>
            <li className="footer__info-links__links-block_item"><Link to='/'>Ground Handling</Link></li>
            <li className="footer__info-links__links-block_item"><Link to='/'>Airport Characteristics</Link></li>
            <li className="footer__info-links__links-block_item"><Link to='/'>Education center</Link></li>
            <li className="footer__info-links__links-block_item"><Link to='/'>Careers</Link></li>
          </ul>
        </div>
        <div className="footer__info-links__links-block">
          <h5 className="footer__info-links__links-block_title">Press centre</h5>
          <ul className="footer__info-links__links-block_list">
            <li className="footer__info-links__links-block_item"><Link to='/'>Main page</Link></li>
            <li className="footer__info-links__links-block_item"><Link to='/'>Latest news</Link></li>
            <li className="footer__info-links__links-block_item"><Link to='/'>Social &#38 art projects</Link></li>
            <li className="footer__info-links__links-block_item"><Link to='/'>Financial reports</Link></li>
            <li className="footer__info-links__links-block_item"><Link to='/'>Traffic statistics</Link></li>
          </ul>
        </div>
      </div>


      <div className="footer__connect-links">
        <div className="footer__connect-links__phone">
          <h5 className="footer__connect-links__phone_title">Call information</h5>
          <p><Link to='/'>+38 (044) 364-45-14</Link></p>
        </div>
        <div className="footer__connect-links__social-links">
        <h5 className="footer__connect-links__phone_title">Follow us</h5>
          <p>
            <Link to='/'><i className="fab fa-facebook-f"></i></Link>
            <Link to='/'><i className="fab fa-twitter"></i></Link>
            <Link to='/'><i className="fab fa-instagram"></i></Link>
            <Link to='/'><i className="fab fa-youtube"></i></Link>
          </p>
        </div>
      </div>


      <div className="footer__bottom-links">
        <div className="footer__bottom-links_copyrights">
          <p>&#169; 2011-2020</p>
          <p>'Kyiv' International Airport</p>
          <p><Link to='/'>Part of Ufuture Investment Group</Link></p>
        </div>
        <div className="footer__bottom-links_developed">
          <p>Developed by</p>
          <p><Link to='/'>smp/solutions</Link></p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;