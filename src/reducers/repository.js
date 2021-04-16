import * as types from '../constants/actionTypes';

const initialState = {
	getRepositoryList: {
		loading: false,
		data: [],
	},
};

const Repository = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.GET_REPOSITORY_LIST_REQUEST:
			return {
				...state,
				getRepositoryList: { ...state.getRepositoryList, loading: true },
			};
		case types.GET_REPOSITORY_LIST_SUCCESS:
			return {
				...state,
				getRepositoryList: { data: payload, loading: false },
			};
		case types.GET_REPOSITORY_LIST_FAILURE:
			return {
				...state,
				getRepositoryList: { data: [], loading: false },
			};

		default:
			return state;
	}
};

export default Repository;
