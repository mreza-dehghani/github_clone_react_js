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
