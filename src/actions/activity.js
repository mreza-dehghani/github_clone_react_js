import * as types from '../constants/actionTypes';

export const getUserPublicEvents = postData => {
	return {
		type: types.GET_USER_PUBLIC_EVENTS_REQUEST,
		postData,
	};
};
export const getUserPublicEventsSuccess = data => {
	return {
		type: types.GET_USER_PUBLIC_EVENTS_SUCCESS,
		payload: data,
	};
};
export const getUserPublicEventsFailure = () => {
	return {
		type: types.GET_USER_PUBLIC_EVENTS_FAILURE,
	};
};
