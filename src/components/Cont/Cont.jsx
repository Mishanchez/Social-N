import React from 'react';
import anyName from './Cont.module.css';
import Profile from './Profile/Profile';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Cont = (props) => {

    return (

        
        <div className={anyName.cont}>

            <Profile  profile={props.profile} />

            <MyPostsContainer/>

        </div>
    )
};



export default Cont;