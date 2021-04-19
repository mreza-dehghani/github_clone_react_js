import * as types from '../constants/actionTypes';
import { getDate } from '../helper/date';

const initialState = {
	getUserPublicEvents: {
		loading: false,
		data: [],
		initialData: [],
	},
};

const Activity = (state = initialState, { type, payload }) => {
	switch (type) {
		case types.GET_USER_PUBLIC_EVENTS_REQUEST:
			return {
				...state,
				getUserPublicEvents: { ...state.getUserPublicEvents, loading: true },
			};
		case types.GET_USER_PUBLIC_EVENTS_SUCCESS:
			const getAllUniqueDates = data => {
				const allDates =
					data &&
					data.map(item => {
						return getDate(item.created_at);
					});
				return [...new Set(allDates)];
			};
			const normalizedDataByCreatedDate = data => {
				const dates = getAllUniqueDates(data);
				const filteredData = [];
				dates.forEach((date, index) => {
					const obj = {
						index,
						created_at: date,
						items:
							data &&
							data.filter(item => {
								if (getDate(item.created_at) === date) {
									return item;
								}
							}),
					};
					filteredData.push(obj);
				});
				return filteredData;
			};
			return {
				...state,
				getUserPublicEvents: {
					initialData: normalizedDataByCreatedDate(payload),
					data: normalizedDataByCreatedDate(payload),
					loading: false,
				},
			};
		case types.GET_USER_PUBLIC_EVENTS_FAILURE:
			return {
				...state,
				getUserPublicEvents: { data: [], initialData: [], loading: false },
			};

		default:
			return state;
	}
};

export default Activity;
