import * as types from '../constants/actionTypes';

const initialState = {
	getRepositoryList: {
		loading: false,
		data: [],
		initialData: [],
		isFilter: false,
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

		case types.REPOSITORY_FILTER_BY_SEARCH:
			const filterRepository = (initialData, payload) => {
				return (
					initialData &&
					initialData.filter(item => {
						if (item.name.includes(payload)) {
							return item;
						}
					})
				);
			};
			return {
				...state,
				getRepositoryList: {
					...state.getRepositoryList,
					data: filterRepository(state.getRepositoryList.initialData, payload),
					isFilter: true,
				},
			};
		case types.CLEAR_REPOSITORY_FILTER_BY_SEARCH:
			return {
				...state,
				getRepositoryList: {
					...state.getRepositoryList,
					data: [...state.getRepositoryList.initialData],
					isFilter: false,
				},
			};

		case types.REPOSITORY_FILTER_BY_TYPE:
			const filterRepositoryByType = (initialData, payload) => {
				return (
					initialData &&
					initialData.filter(item => {
						if (payload === 'private' && item.name.private) {
							return item;
						} else if (payload === 'public' && !item.name.private) {
							return item;
						} else if (payload === 'all') {
							return item;
						}
					})
				);
			};
			return {
				...state,
				getRepositoryList: {
					...state.getRepositoryList,
					data: filterRepositoryByType(state.getRepositoryList.initialData, payload),
					isFilter: true,
				},
			};
		case types.CLEAR_REPOSITORY_FILTER_BY_TYPE:
			return {
				...state,
				getRepositoryList: {
					...state.getRepositoryList,
					data: [...state.getRepositoryList.initialData],
					isFilter: false,
				},
			};

		default:
			return state;
	}
};

export default Repository;
