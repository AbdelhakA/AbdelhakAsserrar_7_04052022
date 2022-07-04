import Logo from './Logo/Logo';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [userLogout, setUserLogout] = useState({});
  const logout = () => {
    window.location.reload() ;
  }

 useEffect(() => {
     setUserLogout(JSON.parse( localStorage.getItem('user')));
 },[]); 

 return (
  <header className="header">
  <div className="toolbar">
    <div className="logo_home">
      <Link to="/home"><Logo /></Link>
    </div>
    <div className="link">
      <Link to="/account" className='link_profil'>
        {/* <AccountCircleIcon className='link_profil_icon'/> */}
        <p className='link_profil_text'>Profil</p>
      </Link>

      <Link to="/login" className='link_logout'>
        {/* <ExitToAppIcon className='link_logout_icon' /> */}
        <p className='link_logout_text'>Logout</p>
      </Link>
    </div>
  </div>
</header>
  );

}

export default Header; 