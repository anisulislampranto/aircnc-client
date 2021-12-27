import React from 'react';
import SearchSidebar from '../SearchSidebar/SearchSidebar';
import Services from '../Services/Services';

const HeaderBody = () => {
    return (
        <div className='d-flex container'>
            <SearchSidebar/>
            <Services/>
        </div>
    );
};

export default HeaderBody;