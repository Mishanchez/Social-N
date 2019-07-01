import React from 'react';
import anyName from './Post.module.css';





const Post = (props) => {
  return (

    <div className={anyName.item}>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4r7SBkmqVCU1b_iSYS5oLER4toEIz3USVpZW-A_gm4GlACoOqg' />

      {props.message}
      <div className={anyName.like}>
        <span>Like </span> 
        {props.likesCount}
      </div>
    </div>
  )
}


export default Post;