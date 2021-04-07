import * as types from '../constants/actionTypes';

export const login = postData => {
	return {
		type: types.LOGIN_REQUEST,
		postData,
	};
};
export const loginSuccess = data => {
	return {
		type: types.LOGIN_SUCCESS,
		payload: data,
	};
};
export const loginFailure = () => {
	return {
		type: types.LOGIN_FAILURE,
	};
};
