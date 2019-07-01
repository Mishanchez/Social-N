import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {

    userId: null,
    email: null,
    login: null,
    isFetching: false,

    isAuth:false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
        
            return {
                ...state,
                ...action.data,
                isAuth: true,
                
            }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        };

        default: return state;
    };

};

export default authReducer;


export const setAuthUserData = (userId, login, email) => {
    return {
        type: SET_USER_DATA,
        data: {userId, login, email }
    }
};

export const getAuthUserData =() => (dispatch) =>{

    authAPI.me()
    .then(response => {
        if (response.data.resultCode === 0) {
            let { id, login, email } = response.data.data;
            dispatch ( setAuthUserData(id, login, email) )
        }
    })

}




export const toggleIsFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching } };


