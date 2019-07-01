import React from 'react';
import x from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return <header className={x.header}>

        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgQfXAgNOfRnAScc73GVrb-3vis0ZEdfmB9n3j3YY-lo4j9do' ></img>


        <div className={x.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}> Login</NavLink>}
        </div>


    </header>
};

export default Header;