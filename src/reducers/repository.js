import * as types from '../constants/actionTypes';

const initialState = {
	getRepositoryList: {
		loading: false,
		data: [],
		initialData: [],
		isFilter: false,
	},
	getRepository: {
		loading: false,
		data: [],
	},
	getRepositoryBranches: {
		loading: false,
		data: [],
	},
	getRepositoryCommits: {
		loading: false,
		data: [],
	},
	getRepositoryLanguages: {
		loading: false,
		data: {},
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

		case types.GET_REPOSITORY_REQUEST:
			return {
				...state,
				getRepository: { ...state.getRepository, loading: true },
			};
		case types.GET_REPOSITORY_SUCCESS:
			return {
				...state,
				getRepository: { data: payload, loading: false },
			};
		case types.GET_REPOSITORY_FAILURE:
			return {
				...state,
				getRepository: { data: [], loading: false },
			};

		case types.GET_REPOSITORY_BRANCHES_REQUEST:
			return {
				...state,
				getRepositoryBranches: { ...state.getRepositoryBranches, loading: true },
			};
		case types.GET_REPOSITORY_BRANCHES_SUCCESS:
			return {
				...state,
				getRepositoryBranches: { data: payload, loading: false },
			};
		case types.GET_REPOSITORY_BRANCHES_FAILURE:
			return {
				...state,
				getRepositoryBranches: { data: [], loading: false },
			};

		case types.GET_REPOSITORY_COMMITS_REQUEST:
			return {
				...state,
				getRepositoryCommits: { ...state.getRepositoryCommits, loading: true },
			};
		case types.GET_REPOSITORY_COMMITS_SUCCESS:
			return {
				...state,
				getRepositoryCommits: { data: payload, loading: false },
			};
		case types.GET_REPOSITORY_COMMITS_FAILURE:
			return {
				...state,
				getRepositoryCommits: { data: [], loading: false },
			};

		case types.GET_REPOSITORY_LANGUAGES_REQUEST:
			return {
				...state,
				getRepositoryLanguages: { ...state.getRepositoryLanguages, loading: true },
			};
		case types.GET_REPOSITORY_LANGUAGES_SUCCESS:
			return {
				...state,
				getRepositoryLanguages: {
					data: {
						...payload,
						totalCounts: Object.keys(payload).map(key => {
							return payload[key];
						}),
					},
					loading: false,
				},
			};
		case types.GET_REPOSITORY_LANGUAGES_FAILURE:
			return {
				...state,
				getRepositoryLanguages: { data: {}, loading: false },
			};

		default:
			return state;
	}
};

export default Repository;
