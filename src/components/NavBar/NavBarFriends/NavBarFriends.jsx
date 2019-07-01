import React from 'react';
import x from './NavBarFriends.module.css';
import FriendItem from './FriendItem';





const NavBarFriends = (props) => {

let f1 = props.navBarFriendsData.map( d => <FriendItem id={d.id} name={d.name} key={d.id}/> );

        return (
        <div className={x.navfriends}>
           {f1}
        </div>
    )
}

export default NavBarFriends;