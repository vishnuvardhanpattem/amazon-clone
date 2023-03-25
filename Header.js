import { Link } from "react-router-dom";
import "./Header.css";
import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
    const [{ basket }, user] = useStateValue();
    const login = () =>{
        if(user){
            auth.signOut();
        }
    }
    
    return (
        <nav className="header">
            <Link to="/" >
                <img className="header__logo"
                src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
                 alt="amazonLogo" />
            </Link>
            <div className="header__search">
                <input type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to={user && '/login'} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user && user?.email}</span>
                        <span className="header__optionLineTwo">{!user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className="header__cart" />
                        <span className="header__optionLineTwo">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
};

export default Header;