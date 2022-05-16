// import Logo from '../components/';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [userLogout, setUserLogout] = useState({});
  const logout = () => {
    window.location.reload();
  }


const user = JSON.parse(localStorage.getItem("user"));

 useEffect(() => {
     setUserLogout(JSON.parse(localStorage.getItem('user')));
 },[]);

 return (
    <header className="header">
      <div className="toolbar">
        <div className="logo_home">
          {/* <Link to="/home"><Logo /></Link> */}
        </div>
        <div className="flex-items-header">
          {/* <Link to="/profil"></Link> */}
          <span className='logout'>Logout</span>
          {/* <Link to="/sign-in"></Link> */}
        </div>
      </div>
    </header>
  );

}

export default Header; 