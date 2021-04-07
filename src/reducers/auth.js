import * as types from '../constants/actionTypes';

const initialState = {
	login: {
		loading: false,
		data: [],
	},
};

const Auth = (state = initialState, { type, payLoad }) => {
	switch (type) {
		case types.LOGIN_REQUEST:
			return {
				...state,
				login: { ...state.login, loading: true },
			};
		case types.LOGIN_SUCCESS:
			return {
				...state,
				login: { data: payLoad, loading: false },
			};
		case types.LOGIN_FAILURE:
			return {
				...state,
				login: { ...state.login, loading: false },
			};

		default:
			return state;
	}
};

export default Auth;
