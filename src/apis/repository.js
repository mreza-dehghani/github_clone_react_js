import { ApiCaller } from '../helper/apiCaller';

export const getRepositoryListService = postData => {
	return ApiCaller({ needToken: false }).get(`${process.env.REACT_APP_API_URL}/users/${postData}/repos`);
};

export const getRepositoryService = postData => {
	return ApiCaller({ needToken: false }).get(
		`${process.env.REACT_APP_API_URL}/repos/${postData.username}/${postData.repo}`
	);
};

export const getRepositoryBranchesService = postData => {
	return ApiCaller({ needToken: false }).get(`${process.env.REACT_APP_API_URL}/repos/${postData}/branches`);
};

export const getRepositoryCommitsService = postData => {
	return ApiCaller({ needToken: false }).get(`${process.env.REACT_APP_API_URL}/repos/${postData}/commits`);
};

export const getRepositoryLanguagesService = postData => {
	return ApiCaller({ needToken: false }).get(`${process.env.REACT_APP_API_URL}/repos/${postData}/languages`);
};
