import React, { useEffect } from "react";
import UsersPagination from "./UsersPagination/UsersPagination";
import styles from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import { NavLink, useParams } from "react-router-dom";
import User from "./User/User";

let Users = (props) => {
  return (
    <div className={styles.users}>
      <UsersPagination
        onFirstPageDoubleArrowClick={props.onFirstPageDoubleArrowClick}
        onLeftArrowClick={props.onLeftArrowClick}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}
        onRightArrowClick={props.onRightArrowClick}
        onLastPageDoubleArrowClick={props.onLastPageDoubleArrowClick}
        onNumberInputChange={props.onNumberInputChange}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      ></UsersPagination>
      <div className={styles.users__wrapper}>
        {props.isFetching ? (
          <Preloader />
        ) : (
          props.users.map((user) => {
            return (
              <User
                key={user.id}
                user={user}
                followThunkCreator={props.followThunkCreator}
                followingInProgress={props.followingInProgress}
                unFollowThunkCreator={props.unFollowThunkCreator}
                isAuth={props.isAuth}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Users;
