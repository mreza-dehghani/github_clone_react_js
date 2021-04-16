import * as types from '../constants/actionTypes';

const initialState = {
	getAuthenticateUserInfo: {
		loading: false,
		data: [],
	},
};

const Account = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.GET_AUTHENTICATED_USER_INFO_REQUEST:
			return {
				...state,
				getAuthenticateUserInfo: { ...state.getAuthenticateUserInfo, loading: true },
			};
		case types.GET_AUTHENTICATED_USER_INFO_SUCCESS:
			return {
				...state,
				getAuthenticateUserInfo: {
					data: {
						...payload,
						links: [
							{ name: 'blog', path: payload.blog },
							{ name: 'twitter', path: payload.twitter },
							{ name: 'company', path: payload.company },
						],
					},
					loading: false,
				},
			};
		case types.GET_AUTHENTICATED_USER_INFO_FAILURE:
			return {
				...state,
				getAuthenticateUserInfo: { data: [], loading: false },
			};

		default:
			return state;
	}
};

export default Account;
