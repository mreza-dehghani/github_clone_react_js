import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../constants/actionTypes';
import { ActionRepository } from '../actions';
import * as repositoryApi from '../apis/repository';

export function* watcherRepository() {
	yield takeLatest(types.GET_REPOSITORY_LIST_REQUEST, workerGetRepositoryList);
	yield takeLatest(types.GET_REPOSITORY_REQUEST, workerGetRepository);
	yield takeLatest(types.GET_REPOSITORY_BRANCHES_REQUEST, workerGetRepositoryBranches);
	yield takeLatest(types.GET_REPOSITORY_COMMITS_REQUEST, workerGetRepositoryCommits);
	yield takeLatest(types.GET_REPOSITORY_LANGUAGES_REQUEST, workerGetRepositoryLanguages);
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
		yield put(ActionRepository.getRepositoryBranches(data.full_name));
		yield put(ActionRepository.getRepositoryCommits(data.full_name));
		yield put(ActionRepository.getRepositoryLanguages(data.full_name));
		yield put(ActionRepository.getRepositorySuccess(data));
	} catch (error) {
		if (error && error.message) {
			toast.error(error.message.toString());
			console.log(error);
		}
		yield put(ActionRepository.getRepositoryFailure());
	}
}

function getRepositoryBranches(postData) {
	return repositoryApi.getRepositoryBranchesService(postData);
}
function* workerGetRepositoryBranches(action) {
	try {
		const response = yield call(getRepositoryBranches, action.postData);
		const data = response && response.data;
		yield put(ActionRepository.getRepositoryBranchesSuccess(data));
	} catch (error) {
		if (error && error.message) {
			toast.error(error.message.toString());
			console.log(error);
		}
		yield put(ActionRepository.getRepositoryBranchesFailure());
	}
}

function getRepositoryCommits(postData) {
	return repositoryApi.getRepositoryCommitsService(postData);
}
function* workerGetRepositoryCommits(action) {
	try {
		const response = yield call(getRepositoryCommits, action.postData);
		const data = response && response.data;
		yield put(ActionRepository.getRepositoryCommitsSuccess(data));
	} catch (error) {
		if (error && error.message) {
			toast.error(error.message.toString());
			console.log(error);
		}
		yield put(ActionRepository.getRepositoryCommitsFailure());
	}
}

function getRepositoryLanguages(postData) {
	return repositoryApi.getRepositoryLanguagesService(postData);
}
function* workerGetRepositoryLanguages(action) {
	try {
		const response = yield call(getRepositoryLanguages, action.postData);
		const data = response && response.data;
		yield put(ActionRepository.getRepositoryLanguagesSuccess(data));
	} catch (error) {
		if (error && error.message) {
			toast.error(error.message.toString());
			console.log(error);
		}
		yield put(ActionRepository.getRepositoryLanguagesFailure());
	}
}
