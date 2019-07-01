import React from 'react';
import x from './NavBarFriends.module.css';




const FriendItem = (props) => {

  return (

    <div className={x.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4r7SBkmqVCU1b_iSYS5oLER4toEIz3USVpZW-A_gm4GlACoOqg' />
     
     {props.name}

   
    </div>
  )
}


export default FriendItem;