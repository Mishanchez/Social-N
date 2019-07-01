import { usersApi } from "../api/api";

const ADD_POST = 'ADD_POST'
const UPP_NEWPOST = 'UPP_NEWPOST'
const SET_USER_PROFILE = `SET_USER_PROFILE`



let initialState = {

    postsData: [
        { id: 111, likesCount: 0, message: 'Hi! How are you' },
        { id: 112, likesCount: 62, message: 'Yea, my ferst post' },
        { id: 113, likesCount: 3, message: 'Call me at 8:pm.' },
    ],
    newPostText: 'add new post',
    profile: null,
}

const contReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                likesCount: 0,
                message: state.newPostText,
            }
            return {
                ...state,
                postsData: [...state.postsData],
                newPostText: '' ,
                postsData: [...state.postsData, (newPost)],
               
            }
            
        // {
        //     let newPost = {
        //         id: 5,
        //         likesCount: 0,
        //         message: state.newPostText,
        //     }
        //     let stateCopy = { ...state };
        //     stateCopy.postsData = [...state.postsData];

        //     stateCopy.postsData.push(newPost);
        //     stateCopy.newPostText = '';
        //     return stateCopy;
        // }

        case UPP_NEWPOST:
            return {
                ...state,
                newPostText: action.newPostText
            }

        // {
        //     let stateCopy = { ...state };
        //     stateCopy.newPostText = action.newPostText;
        //     return stateCopy;
        // }
        
case SET_USER_PROFILE:
    return{ ...state,
         profile: action.profile  }


        default: return state;
    };


};
export default contReducer;



export const addPostActioncreator = () => {
    return { type: ADD_POST }
};
export const uppNewPostTextActioncreator = (text) => {
    return {
        type: UPP_NEWPOST, newPostText: text
    }
};

export const setUserProfile = (profile) =>{
    return{ type:SET_USER_PROFILE, profile}
}



export const getUserProfile = (userId)=>(dispatch) =>{
   
    usersApi.getProfile(userId)
    .then(response => {
     dispatch ( setUserProfile(response.data) ) 
    });

}





