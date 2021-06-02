import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link path="/" className="item" >Accordion</Link>
            <Link path="/wiki" className="item">Search Wiki</Link>
            <Link path="/dropdown" className="item">Dropdown</Link>
            <Link path="/translate" className="item">Translate</Link>
        </div>
    );
};

export default Header;