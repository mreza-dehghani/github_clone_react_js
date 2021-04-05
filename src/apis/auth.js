import { ApiCaller } from '../helper/apiCaller';

export const loginService = postData => {
	console.log(postData);
	return fetch(`https://api.github.com/users/${postData}`);
	// return ApiCaller().get(`${process.env.REACT_APP_API_URL}/users/${postData}`);
};
