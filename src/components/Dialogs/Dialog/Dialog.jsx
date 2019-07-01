import React from 'react';
import x from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';



const Dialog = (props) => {
   return (

      <div className={x.dialog + ' ' + x.active}>

         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4r7SBkmqVCU1b_iSYS5oLER4toEIz3USVpZW-A_gm4GlACoOqg' />


         <NavLink activeClassName={x.activelink} to={'/Messages/' + props.id}>
            {props.name}
         </NavLink>


      </div>

   )
};

export default Dialog;