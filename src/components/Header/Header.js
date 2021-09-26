import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h3>There's a <span className="caption">Sitcom Reunion</span> in town!</h3>
            <h5>Whom do you want as a Guest?</h5>
            <div className="d-flex justify-content-center">
                <h4 className='m-0 bg-danger px-4 py-1 rounded-pill text-light '>Vote Now!</h4>
            </div>
            <h2>Budget Limit: <span className="budget">$150 Million</span></h2>
        </div>
    );
};

export default Header;
