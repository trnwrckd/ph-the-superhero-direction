import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h3>There's a <span className="text-warning fs-2 ">Sitcom Reunion</span> in town</h3>
            <h4>Whom do you want as a Guest? Vote Now!</h4>
            <h2>Budget Limit: <span className="fw-bold text-success">150 Million</span></h2>
        </div>
    );
};

export default Header;
