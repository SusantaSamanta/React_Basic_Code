import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Headers.css';


const Headers = () => {
    return (
        <div id='HeaderContainer'>
            <Link className='HeadLinks' to={'/'}>Home</Link>
            <Link className='HeadLinks' to={'/cart'}>Cart</Link>
        </div>
    )
}

export default Headers;