import React, { Component } from 'react';
import logo from '../../images/icons/logo.png'
import search from '../../images/icons/search-icon.png'
import cart from '../../images/icons/cart.png'
import '../../Css/bootstrap.css'
import '../../Css/styles.css'

class Header extends Component {
    render() {
        return <div>
            <header className="header-wrapper">
                <div className="container">
                    <div className="internal-wrapper">
                        <ul>
                            <li className="logo-link"> <a href="#"><img src={logo} /></a></li>
                            <li> <a href="#">Mac</a></li>
                            <li> <a href="#">iphone</a></li>
                            <li><a href="#">ipad</a></li>
                            <li> <a href="#">Watch</a></li>
                            <li><a href="#">Tv</a></li>
                            <li><a href="#">Music</a></li>
                            <li><a href="#">Support</a></li>
                            <li className="search-link"><a href="#"><img src={search} /></a></li>
                            <li className="cart-link"><a href="#"><img src={cart} /></a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>;
    }
}

export default Header;