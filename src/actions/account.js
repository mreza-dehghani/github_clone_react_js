import * as types from '../constants/actionTypes';

export const getAuthenticateUserInfo = postData => {
	return {
		type: types.GET_AUTHENTICATED_USER_INFO_REQUEST,
		postData,
	};
};
export const getAuthenticateUserInfoSuccess = data => {
	return {
		type: types.GET_AUTHENTICATED_USER_INFO_SUCCESS,
		payload: data,
	};
};
export const getAuthenticateUserInfoFailure = () => {
	return {
		type: types.GET_AUTHENTICATED_USER_INFO_FAILURE,
	};
};

export const getOtherUserInfo = postData => {
	return {
		type: types.GET_OTHER_USER_INFO_REQUEST,
		postData,
	};
};
export const getOtherUserInfoSuccess = data => {
	return {
		type: types.GET_OTHER_USER_INFO_SUCCESS,
		payload: data,
	};
};
export const getOtherUserInfoFailure = () => {
	return {
		type: types.GET_OTHER_USER_INFO_FAILURE,
	};
};

export const getUserFollowerList = postData => {
	return {
		type: types.GET_USER_FOLLOWER_LIST_REQUEST,
		postData,
	};
};
export const getUserFollowerListSuccess = data => {
	return {
		type: types.GET_USER_FOLLOWER_LIST_SUCCESS,
		payload: data,
	};
};
export const getUserFollowerListFailure = () => {
	return {
		type: types.GET_USER_FOLLOWER_LIST_FAILURE,
	};
};

export const getUserFollowingList = postData => {
	return {
		type: types.GET_USER_FOLLOWING_LIST_REQUEST,
		postData,
	};
};
export const getUserFollowingListSuccess = data => {
	return {
		type: types.GET_USER_FOLLOWING_LIST_SUCCESS,
		payload: data,
	};
};
export const getUserFollowingListFailure = () => {
	return {
		type: types.GET_USER_FOLLOWING_LIST_FAILURE,
	};
};

export const unfollowUser = postData => {
	return {
		type: types.UNFOLLOW_USER_REQUEST,
		postData,
	};
};
export const unfollowUserSuccess = data => {
	return {
		type: types.UNFOLLOW_USER_SUCCESS,
		payload: data,
	};
};
export const unfollowUserFailure = () => {
	return {
		type: types.UNFOLLOW_USER_FAILURE,
	};
};
