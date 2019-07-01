const UPP_NEWMESSAGE = 'UPP_NEWMESSAGE'
const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {

    dialogsData: [
        { id: 11, name: 'Jimmy' },
        { id: 12, name: 'Alex' },
        { id: 13, name: 'Sharon' },
        { id: 14, name: 'John' },
        { id: 15, name: 'Sarah' },
    ],

    messagesData: [
        { id: 1, message: 'HI!' },
        { id: 2, message: 'Are you comming today?' },
        { id: 3, message: 'Call me !!' },
        { id: 4, message: 'yo!' },
        { id: 5, message: 'HI!' },
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

     
    switch (action.type) {
        case UPP_NEWMESSAGE:
           return {
                ...state,
                newMessageText: action.newMessageText
                // stateCopy.newMessageText = action.newMessageText
            }
           

        case ADD_MESSAGE:
            let newMessage = {
                id: 666,
                message: state.newMessageText,
            }
            return {
                ...state,
                messagesData: [...state.messagesData],
                newMessageText: '',
                messagesData: [...state.messagesData, (newMessage)]
                //    stateCopy.messagesData= messagesData.push(newMessage)
            }
           

        default: return state

    }


}


export default dialogsReducer;




export const uppNewMessageTextActioncreator = (messText) => {
    return { type: UPP_NEWMESSAGE, newMessageText: messText }
};
export const addMessageActioncreator = () => {
    return { type: ADD_MESSAGE }
}