import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar';
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from "react-router-dom"
const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const links = [
    {
      name: "Home",
      path: '/',
      icon: faHome
    },
    {
      name:'Recipes',
      path: '/recipes',
      icon: faList
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: faCog
    }
  ]
  const closeSidebar = () =>{
    setShowSideBar(false);
  }
  const location = useLocation()
  return (
    <>
    
    <div className='navbar container'>
        <Link to='/' className='logo'>O<span>gg</span>y's Kitchen</Link>
        <div className="nav-links">
          {links.map(link =>(
            <Link to={link.path} key={link.name} className={location.pathname === link.path ? 'active': ''}>{link.name}</Link>
          ))}
            {/* <a href='#' className='active'>Home</a>
            <a href='#'>Recipes</a>
            <a href='#'>Settings</a> */}
        </div>
        <div onClick={() => setShowSideBar(true)} className={showSideBar ? 'sidebar-btn active' : 'sidebar-btn'}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
    </div>
    {showSideBar && <Sidebar close={closeSidebar} links={links} />}
    
    </>
  )
}

export default Navbar