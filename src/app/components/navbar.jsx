import React from "react"; 
import {Link} from "react-router-dom";
import{ShoppingCart} from "phosphor-react";


export const Navbar=() =>{
    return<div className="navbar">
        <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
            <span><ShoppingCart size={24}/></span>
        </Link>
        </div>
    </div>
};
