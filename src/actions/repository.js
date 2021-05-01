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

export const repositoryFilterBySearch = payload => {
	return {
		type: types.REPOSITORY_FILTER_BY_SEARCH,
		payload,
	};
};
export const clearRepositoryFilterBySearch = () => {
	return {
		type: types.CLEAR_REPOSITORY_FILTER_BY_SEARCH,
	};
};

export const repositoryFilterByType = payload => {
	return {
		type: types.REPOSITORY_FILTER_BY_TYPE,
		payload,
	};
};
export const clearRepositoryFilterByType = () => {
	return {
		type: types.CLEAR_REPOSITORY_FILTER_BY_TYPE,
	};
};

export const getRepository = postData => {
	console.log(postData);
	return {
		type: types.GET_REPOSITORY_REQUEST,
		postData,
	};
};
export const getRepositorySuccess = data => {
	return {
		type: types.GET_REPOSITORY_SUCCESS,
		payload: data,
	};
};
export const getRepositoryFailure = () => {
	return {
		type: types.GET_REPOSITORY_FAILURE,
	};
};
