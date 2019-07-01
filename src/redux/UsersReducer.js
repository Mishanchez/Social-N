import { getUsers, getUnfollow, getFollow, usersApi } from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = `SET_USERS`
const SET_CURRENT_PAGE = `SET_CURRENT_PAGE`
const SET_TOTAL_USERS_COUNT = `SET_TOTAL_USERS_COUNT`
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'



let initialState = {

    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [ ]

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) { return { ...u, followed: true } }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) { return { ...u, followed: false } }
                    return u;
                })
            };
        case SET_USERS: {

            // return { ...state, users: action.users}
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUserCount: action.totalCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return { ...state,
                 followingInProgress: action.isFetching 
                 ? [...state.followingInProgress, action.userid  ]
                 : state.followingInProgress.filter( id=> id !=action.userid ) 

                }
        }


        default: return state;
    };

};
export default usersReducer;


export const followSuccess = (userid) => {
    return { type: FOLLOW, userid }
};

export const unfollowSuccess = (userid) => { return { type: UNFOLLOW, userid } };
// export const setUsersAC=(users)=>({ type: SET_USERS, users})
export const setUsers = (users) => { return { type: SET_USERS, users } };
export const setCurrentPage = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } }
export const setTotalUsersCount = (totalUserCount) => { return { type: SET_TOTAL_USERS_COUNT, totalCount: totalUserCount } }
export const toggleIsFetching = (isFetching) => { return { type: TOGGLE_IS_FETCHING, isFetching } };
export const toggleFollowingInProgress = (isFetching, userid) => { return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userid } };


export const getUsersThunk= (currentPage, pageSize) => {
   return  (dispatch)=>{
    dispatch (toggleIsFetching(true) )
     getUsers(currentPage, pageSize)
     
    .then(data => {
    dispatch ( toggleIsFetching(false))  ;
    dispatch ( setUsers(data.items))  ;
    dispatch (setTotalUsersCount(data.totalCount)) ;
    })
}
}

export const followThunk= (userid) => {
    return  (dispatch)=>{

        dispatch (toggleFollowingInProgress(true, userid) );
       getFollow(userid)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(followSuccess(userid) )
            };
            dispatch (toggleFollowingInProgress(false, userid) );

        });
 }
 }

 export const unFollowThunk= (userid) => {
    return  (dispatch)=>{

        dispatch (toggleFollowingInProgress(true, userid) );
        getUnfollow(userid).then(response => {

            if (response.data.resultCode == 0) {
                dispatch (unfollowSuccess(userid) )
            };
            dispatch (toggleFollowingInProgress(false, userid) );

        });
 }
 }







