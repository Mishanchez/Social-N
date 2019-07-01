import React from 'react';
import anyName from './Profile.module.css';
import Preloader from '../../Common/Preloader.js/Preloader';
import jobY from '../../../assets/img/jobYes.png';
import jobN from '../../../assets/img/jobNo.png';
import userIcon from '../../../assets/img/User.png'
import ProfileStatus from './ProfileStatus';


const Profile = (props) => {

    if (!props.profile) { return <Preloader /> }

    return (<div className={anyName.profile}>


        <div className={anyName.discription}>


            <div> <img src={props.profile.photos.large != null ? props.profile.photos.large : userIcon} />
                <ProfileStatus status={'My status'} />
            </div>

            <div> Full Name : {props.profile.fullName}</div>

            <div>  About Me :  {props.profile.aboutMe}  </div>

            <div> Looking For AJob :
            {props.profile.lookingForAJob ? <img src={jobY} /> : <img src={jobN} />}
            </div>

            <div>   looking For A Job Description : {props.profile.lookingForAJobDescription}</div>


        </div>

    </div>
    )
};



export default Profile;