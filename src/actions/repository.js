import * as types from '../constants/actionTypes';

export const getRepositoryList = postData => {
	return {
		type: types.GET_REPOSITORY_LIST_REQUEST,
		postData,
	};
};
export const getRepositoryListSuccess = data => {
	return {
		type: types.GET_REPOSITORY_LIST_SUCCESS,
		payload: data,
	};
};
export const getRepositoryListFailure = () => {
	return {
		type: types.GET_REPOSITORY_LIST_FAILURE,
	};
};
