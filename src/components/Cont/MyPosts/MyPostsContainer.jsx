import React from 'react';
import { addPostActioncreator, uppNewPostTextActioncreator } from '../../../redux/ContReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


let mapStateToProps=(state)=>{
    return{
        postsData:state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
};


let mapDispatchToProps=(dispatch)=>{
    return {
        addPostState:()=>{ dispatch(addPostActioncreator()) },

        uppNewPostText:(text)=>{ dispatch(uppNewPostTextActioncreator(text))  }
    }
};

const  MyPostsContainer= connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;