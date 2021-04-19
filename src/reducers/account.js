import * as types from '../constants/actionTypes';

const initialState = {
	getUserInfo: {
		loading: false,
		data: [],
	},
	getUserFollowerList: {
		loading: false,
		data: [],
	},
	getUserFollowingList: {
		loading: false,
		data: [],
	},
	unfollowUser: {
		loading: false,
		data: [],
	},
};

const Account = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.GET_AUTHENTICATED_USER_INFO_REQUEST:
			return {
				...state,
				getUserInfo: { ...state.getUserInfo, loading: true },
			};
		case types.GET_AUTHENTICATED_USER_INFO_SUCCESS:
			return {
				...state,
				getUserInfo: {
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
				getUserInfo: { data: [], loading: false },
			};

		case types.GET_OTHER_USER_INFO_REQUEST:
			return {
				...state,
				getUserInfo: { ...state.getUserInfo, loading: true },
			};
		case types.GET_OTHER_USER_INFO_SUCCESS:
			return {
				...state,
				getUserInfo: {
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
		case types.GET_OTHER_USER_INFO_FAILURE:
			return {
				...state,
				getUserInfo: { data: [], loading: false },
			};

		case types.GET_USER_FOLLOWER_LIST_REQUEST:
			return {
				...state,
				getUserFollowerList: { ...state.getUserFollowerList, loading: true },
			};
		case types.GET_USER_FOLLOWER_LIST_SUCCESS:
			return {
				...state,
				getUserFollowerList: { data: payload, loading: false },
			};
		case types.GET_USER_FOLLOWER_LIST_FAILURE:
			return {
				...state,
				getUserFollowerList: { data: [], loading: false },
			};

		case types.GET_USER_FOLLOWING_LIST_REQUEST:
			return {
				...state,
				getUserFollowingList: { ...state.getUserFollowingList, loading: true },
			};
		case types.GET_USER_FOLLOWING_LIST_SUCCESS:
			return {
				...state,
				getUserFollowingList: { data: payload, loading: false },
			};
		case types.GET_USER_FOLLOWING_LIST_FAILURE:
			return {
				...state,
				getUserFollowingList: { data: [], loading: false },
			};

		case types.UNFOLLOW_USER_REQUEST:
			return {
				...state,
				unfollowUser: { ...state.unfollowUser, loading: true },
			};
		case types.UNFOLLOW_USER_SUCCESS:
			return {
				...state,
				unfollowUser: { data: payload, loading: false },
			};
		case types.UNFOLLOW_USER_FAILURE:
			return {
				...state,
				unfollowUser: { data: [], loading: false },
			};

		default:
			return state;
	}
};

export default Account;
