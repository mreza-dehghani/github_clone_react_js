import { ApiCaller } from '../helper/apiCaller';

export const getUserPublicEventsService = postData => {
	return ApiCaller({ needToken: false }).get(`${process.env.REACT_APP_API_URL}/users/${postData}/events/public`);
};
