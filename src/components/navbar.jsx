import React, { Component } from 'react';
import Counter from "./counter";

class NavBar extends Component{

    render() {
        return(
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
            </nav>
        );
    }

}
export default NavBar;
