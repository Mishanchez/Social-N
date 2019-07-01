import React from 'react';
import anyName from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let postsElement =
        props.postsData.map((p) => <Post likesCount={p.likesCount} key={p.id} message={p.message} />)

    let textPost = React.createRef();


    let addPost = () => {
        props.addPostState();
    };


    let changePost = () => {
        let text = textPost.current.value;
        props.uppNewPostText(text);
    };


    return <div>

        <div className={anyName.item}>

            <textarea onChange={changePost} ref={textPost} value={props.newPostText} /> <br />

            <button onClick={addPost} >Send</button>
        </div>

        {postsElement}
    </div>
};

export default MyPosts;