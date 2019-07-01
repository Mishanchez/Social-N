import React from 'react';
import x from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
import NavBarFriends from './NavBarFriends/NavBarFriends.jsx';



const NavBar = (props) => {
    return <nav className={x.nav}>

        <div className={x.item}>
            <NavLink to='/Profile' activeClassName={x.activelink}>Profile</NavLink>
        </div>
        <div className={x.item}>
            <NavLink to='/Messages' activeClassName={x.activelink}>Messages</NavLink>
        </div>

        <div className={x.item}>
            <NavLink to='/Users' activeClassName={x.activelink}>Users</NavLink>
        </div>


        <div className={x.item}>
            <NavLink to='/News' activeClassName={x.activelink}>News</NavLink>
        </div>
        <div className={x.item}>
            <NavLink to='/Music' activeClassName={x.activelink}>Music</NavLink>
        </div>
        <div className={x.item}>
            {/* <a href='/Settings'>Settings</a> */}
            <NavLink to='/Settings' activeClassName={x.activelink}>Settings</NavLink>
        </div>

        <div className='navbarfriends'>
            <NavBarFriends  navBarFriendsData={props.navBarFriendsData}/>
        </div>


    </nav>

    
}

export default NavBar;

