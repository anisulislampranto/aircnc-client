import React from 'react';
import HeaderBody from '../HeaderBody/HeaderBody';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <div>
            <Navigation/>
            <HeaderBody/>
        </div>
    );
};

export default Header;