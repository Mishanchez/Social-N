import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../../redux/ContReducer';
import Cont from '../Cont';
import { withRouter } from 'react-router-dom/'
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) { userId = 1053 }

        this.props.getUserProfile(userId);

    };

    render() {

        return (
            <div >
                <Cont  {...this.props} profile={this.props.profile} />
                AVA + diskr
            </div>
        )
    };
};

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
    })
};

export default compose (

    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer)


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);