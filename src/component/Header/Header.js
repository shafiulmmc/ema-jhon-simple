import React from 'react';
import '../Header/Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
           <div className="logo">
           <img src={logo} alt="logo"/>
           </div>
           <nav>
               <ul>
                   <a href="/shop">Shop</a>
                   <a href="/review">Order Review</a>
                   <a href="/inventory">Manage Inventory</a>
               </ul>
           </nav>
        </div>
      
    );
};

export default Header;