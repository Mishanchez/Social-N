import React from 'react';
import anyName from './Profile.module.css';

import Preloader from '../../Common/Preloader.js/Preloader';
import jobY from '../../../assets/img/jobYes.png';
import jobN from '../../../assets/img/jobNo.png';
import userIcon from '../../../assets/img/User.png'
import { toggleIsFetching } from '../../../redux/UsersReducer';




class ProfileStatus extends React.Component {
    // if (!props.profile) { return <Preloader /> }
    state = {
        editMode: false,
    }

    activeEditMode () { 
        this.setState ({ editMode : true })
    }
    deActiveEditMode () { 
        this.setState ({ editMode : false})
    }

    render() {
        return (
            <div >
                {!this.state.editMode &&
                    <div className={anyName.status}>
                        <span onDoubleClick={this.activeEditMode.bind(this)} >{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div >
                        <input autoFocus={true} onBlur={this.deActiveEditMode.bind(this) } value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
};
export default ProfileStatus;