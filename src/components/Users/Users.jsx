import React from 'react';
import userIcon from '../../assets/img/User.png';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';



let Users = (props) => {

    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];


    for (let i = 1; i <= pageCount; i++) { pages.push(i) };

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}

                    onClick={() => { props.onPageChanged(p) }} key={p.id} > {p}</span>

            })};
        </div>

        {
            props.users.map(u => <div key={u.id}>

                <span>
                    <div>
                        <NavLink to={`/Profile/` + u.id} >
                            <img src={u.photos.small != null ? u.photos.small : userIcon} className={styles.photo} />
                        </NavLink>

                    </div>
                    <div>
                        {
                            u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {

                                        props.unFollowThunk(u.id)

                                    }} >Unfollow</button>


                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {

                                        props.followThunk(u.id)

                                    }}>Follow</button>}

                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>

                    </span>

                </span>
            </div>)
        };
    </div>


};
export default Users;