import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavBarContainer from './components/NavBar/NavBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Cont/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='allPage' >

                <HeaderContainer />
                <NavBarContainer navBarFriendsData = {props.state.navBarPage.navBarFriendsData}  />

                <div className='allPageCont'>
 
                    <Route path="/Profile/:userId?" render={() => <ProfileContainer />} />

                    <Route path="/Messages" render={() => <DialogsContainer />} />

                    <Route path="/Music" component={Music} />

                    <Route path="/News" component={News} />

                    <Route path="/Settings" component={Settings} />

                    <Route path="/Users" render={() => < UsersContainer />} />

                    <Route path="/Login" render={() => < Login />} />

                </div>

            </div>
        </BrowserRouter>
    )
};
export default App;


