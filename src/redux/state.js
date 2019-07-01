import contReducer from "./ContReducer";
import dialogsReducer from "./DialogsReducer";

let store = {
    _state: {

        messagePage: {

            dialogsData: [
                { id: 1, name: 'Jimmy' },
                { id: 2, name: 'Alex' },
                { id: 3, name: 'Sharon' },
                { id: 4, name: 'John' },
                { id: 5, name: 'Sarah' },
            ],

            messagesData: [
                { id: 1, message: 'HI!' },
                { id: 2, message: 'Are you comming today?' },
                { id: 3, message: 'Call me !!' },
                { id: 4, message: 'yo!' },
                { id: 5, message: 'HI!' },
            ],
            newMessageText :'',
        },

        profilePage: {

            postsData: [
                { id: 1, likesCount: 0, message: 'Hi! How are you' },
                { id: 1, likesCount: 62, message: 'Yea, my ferst post' },
                { id: 1, likesCount: 3, message: 'Call me at 8:pm.' },
            ],

            newPostText: 'add new post',
        },

        navBar: {
            navBarFriendsData: [
                { id: 1, name: 'Jimmy' },
                { id: 2, name: 'Alex' },
                { id: 5, name: 'Sarah' },
            ],

        },

    },

    getState() { return this._state },
    subscribe(observer) { this._renederAllTree = observer },

    _renederAllTree() {
        console.log("state changet")
    },


    dispatch(action) {
        this._state.profilePage =contReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this._renederAllTree(this._state);


        
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //         likesCount: 0,
        //         message: this._state.profilePage.newPostText,
        //     }
        //     this._state.profilePage.postsData.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._renederAllTree(this._state);
        // }
        // else if (action.type === UPP_NEWPOST) {
        //     this._state.profilePage.newPostText = action.newPostText;
        //     this._renederAllTree(this._state);
        // }
        // else if (action.type === UPP_NEWMESSAGE) {
        //     this._state.messagePage.messagesData.newMessageText = action.newMessageText;
        //     this._renederAllTree(this._state);
        // }
        // else if (action.type === ADD_MESSAGE) {
        //     let newMessage = {
        //         id: 6,
        //         message: this._state.messagePage.messagesData.newMessageText,
        //     }
        //     this._state.messagePage.messagesData.push(newMessage);
        //     this._renederAllTree(this._state);
        // }


    }, 

}


export default store;
 
window.store=store;



