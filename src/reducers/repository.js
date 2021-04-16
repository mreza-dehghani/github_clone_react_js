import * as types from '../constants/actionTypes';

const initialState = {
	getRepositoryList: {
		loading: false,
		data: [],
		initialData: [],
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
				getRepositoryList: { data: payload, initialData: payload, loading: false },
			};
		case types.GET_REPOSITORY_LIST_FAILURE:
			return {
				...state,
				getRepositoryList: { data: [], initialData: [], loading: false },
			};

		case types.REPOSITORY_FILTER:
			const filterRepository = (data, initialData, payload) => {
				const filteredBySearch =
					initialData &&
					initialData.filter(item => {
						if (item.name.includes(payload.search)) {
							return item;
						}
					});
				return filteredBySearch;
			};
			return {
				...state,
				getRepositoryList: {
					...state.getRepositoryList,
					data: filterRepository(state.getRepositoryList.data, state.getRepositoryList.initialData, payload),
				},
			};
		case types.CLEAR_REPOSITORY_FILTER:
			return {
				...state,
				getRepositoryList: {
					...state.getRepositoryList,
					data: [...state.getRepositoryList.initialData],
					initialData: [...state.getRepositoryList.initialData],
				},
			};

		default:
			return state;
	}
};

export default Repository;
