import axios from 'axios';
import { History } from './history';
import { getLocalStorageWithExpiry, getLocalStorage, clearLocalStorage } from './localStorage';

export const ApiCaller = config => {
	let needToken = true;
	if (config) {
		needToken = config.needToken === undefined ? true : config.needToken;
	}

	const axiosInstance = axios.create({
		headers: {},
		responseType: 'json',
	});

	axiosInstance.interceptors.request.use(
		config => {
			const token = getLocalStorage('userToken');

			if (needToken && !token) {
				History.replace('/login');
				return false;
			}
			if (needToken && token) {
				config.headers['Authorization'] = `Bearer ${token}`;
			}
			return config;
		},
		error => {
			Promise.reject(error);
		}
	);

	axiosInstance.interceptors.request.use(
		response => {
			return response;
		},
		error => {
			const { response, data, config } = error;
			if (response.status === 401) {
				clearLocalStorage();
				History.push('/login');
			}
			if (response) {
				Promise.reject(response);
			}
			if (data) {
				Promise.reject(data);
			}
			return Promise.reject(error);
		}
	);

	return axiosInstance;
};
