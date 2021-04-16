import { ApiCaller } from '../helper/apiCaller';

export const getUserInfoService = postData => {
	return ApiCaller({ needToken: false }).get(`${process.env.REACT_APP_API_URL}/users/${postData}`);
};
