import * as types from '../constants/actionTypes';

const initialState = {
	test: {
		loading: false,
		data: [],
	},
};

const Test = (state = initialState, { type, payLoad }) => {
	switch (type) {
		case types.GET_TEST_REQUEST:
			return {
				...state,
				test: { ...state.test, loading: true },
			};
		case types.GET_TEST_SUCCESS:
			return {
				...state,
				test: { data: payLoad, loading: false },
			};
		case types.GET_TEST_FAILURE:
			return {
				...state,
				test: { ...state.test, loading: false },
			};

		default:
			return state;
	}
};

export default Test;
