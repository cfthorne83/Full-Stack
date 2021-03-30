import * as UserApiUtil from "../util/user.api.util";

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => {
    debugger
    return {
        type: RECEIVE_USER,
        user
    }
};

export const updateUser = (user) => {
    debugger
    return dispatch => {
        return UserApiUtil.updateUser(user).then( user => {
            dispatch(receiveUser(user))
        })
    }
}