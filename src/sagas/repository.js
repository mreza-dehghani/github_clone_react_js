import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../constants/actionTypes';
import { ActionRepository } from '../actions';
import * as repositoryApi from '../apis/repository';

export function* watcherRepository() {
	yield takeLatest(types.GET_REPOSITORY_LIST_REQUEST, workerGetRepositoryList);
	yield takeLatest(types.GET_REPOSITORY_REQUEST, workerGetRepository);
}

function getRepositoryList(postData) {
	return repositoryApi.getRepositoryListService(postData);
}
function* workerGetRepositoryList(action) {
	try {
		const response = yield call(getRepositoryList, action.postData);
		const data = response && response.data;
		yield put(ActionRepository.getRepositoryListSuccess(data));
	} catch (error) {
		if (error && error.message) {
			toast.error(error.message.toString());
			console.log(error);
		}
		yield put(ActionRepository.getRepositoryListFailure());
	}
}

function getRepository(postData) {
	return repositoryApi.getRepositoryService(postData);
}
function* workerGetRepository(action) {
	try {
		const response = yield call(getRepository, action.postData);
		const data = response && response.data;
		yield put(ActionRepository.getRepositorySuccess(data));
	} catch (error) {
		if (error && error.message) {
			toast.error(error.message.toString());
			console.log(error);
		}
		yield put(ActionRepository.getRepositoryFailure());
	}
}
