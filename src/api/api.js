import * as axios from 'axios';



// const baseUrl =`https://social-network.samuraijs.com/api/1.0/`

const instance = axios.create({

    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "6113547f-a57e-46fb-bd97-495d6f4942bf" },
});



// export const usersAPI = {
//     getUsers(currentPage = 1, pageSize = 5) {
//         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//             .then(response => {
//                 return response.data
//             });
//     },
//     getFollow(userId) {
//         return instance.post(`follow/${userId}`).then(response => {
//             return response.data
//         })
//     },
//     getUnfollow= (userId) => {
//         return instance.delete(`follow/${userId}`)
//     },
// };




export const getUsers = (currentPage = 1, pageSize = 5) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => { return response.data  });

};

export const getFollow = (userId) => {
    return instance.post(`follow/${userId}`)
    .then(response => { return response.data })
}
export const getUnfollow = (userId) => {
    return instance.delete(`follow/${userId}`)
};

export const usersApi = {
    getProfile(userId) { return instance.get(`profile/ ` + userId) }
};


export const authAPI={
 
    me (){
        return instance.get(`auth/me`)
    },


};

