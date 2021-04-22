import { ApiCaller } from '../helper/apiCaller';

export const getUserInfoService = postData => {
	return ApiCaller({ needToken: false }).get(`${process.env.REACT_APP_API_URL}/users/${postData}`);
};

export const getUserFollowerListService = postData => {
	return ApiCaller({ needToken: false }).get(`${process.env.REACT_APP_API_URL}/users/${postData}/followers`);
};

export const getUserFollowingListService = postData => {
	return ApiCaller({ needToken: false }).get(`${process.env.REACT_APP_API_URL}/users/${postData}/following`);
};

export const unfollowUserService = postData => {
	return ApiCaller({ needToken: false }).delete(`${process.env.REACT_APP_API_URL}/user/following/${postData}`);
};
