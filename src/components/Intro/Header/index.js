import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='row center'>
                    <div className='logo'>
                        <Link to='/'>Crafterina</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
