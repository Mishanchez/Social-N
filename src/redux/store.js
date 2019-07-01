import { combineReducers, createStore, applyMiddleware } from 'redux';
import contReducer from './ContReducer';
import dialogsReducer from './DialogsReducer';
import navbarReducer from './NavbarReducer';
import usersReducer from './UsersReducer';
import authReducer from './auth-Reducer';
import  thunkMiddleweare from 'redux-thunk';




let reducers = combineReducers({
     profilePage: contReducer,
     messagePage: dialogsReducer,
     navBarPage: navbarReducer,
     usersPage: usersReducer,
     auth: authReducer,
});


let store = createStore(reducers, applyMiddleware (thunkMiddleweare) );


window.store= store;

export default store;
