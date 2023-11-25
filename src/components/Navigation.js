import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import '../assets/style/navigation.css';
const Navigation = () => {
  return (
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: 150, height: 100 }} />
        </div>
        <ul className='nav-ul'>
          <Link to="/" className="link">
            <li className='nav-li'>Home</li>
          </Link>
          <Link to="/contact" className="link">
            <li className='nav-li'>Contact</li>
          </Link>
          <Link to="/menu" className="link">
            <li className='nav-li'>Menu</li>
          </Link>
        </ul>
        <div className="items">
          <Link to="#" className="link">
            <FontAwesomeIcon icon={faSearch} className="icon" />{" "}
          </Link>
          <Link to="#" className="link">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />{" "}
          </Link>
        </div>
      </div>
  );
}

export default Navigation
