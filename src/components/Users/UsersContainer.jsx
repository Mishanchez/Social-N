import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import {unFollowThunk, setCurrentPage, followThunk, toggleFollowingInProgress,  getUsersThunk,} from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader.js/Preloader';
import { withAuthRedirect } from '../../hoc/wtisAuthRedirect';
import { compose } from '../../../../../../../Users/Света/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';



class UsersContainer extends React.Component {

    componentDidMount() {
       
        this.props.getUsersThunk (this.props.currentPage, this.props.pageSize);

    }


    onPageChanged = (pageNumber) => {

        this.props.getUsersThunk (pageNumber, this.props.pageSize);

    };
 

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Users

                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unFollowThunk={this.props.unFollowThunk}
                followThunk={this.props.followThunk}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    };
};


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};


export default compose(
    connect(mapStateToProps,
        {
            followThunk,
            unFollowThunk,
            setCurrentPage,
            toggleFollowingInProgress,
            getUsersThunk,
        }
    ),
    withAuthRedirect
) (UsersContainer)