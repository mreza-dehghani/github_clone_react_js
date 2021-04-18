import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../constants/actionTypes';
import { ActionAccount, ActionActivity, ActionRepository } from '../actions';
import * as accountApi from '../apis/account';
import { setLocalStorage } from '../helper/localStorage';

export function* watcherAccount() {
	yield takeLatest(types.GET_AUTHENTICATED_USER_INFO_REQUEST, workerGetAuthenticateUserInfo);
	yield takeLatest(types.GET_USER_FOLLOWER_LIST_REQUEST, workerGetUserFollowerList);
	yield takeLatest(types.GET_USER_FOLLOWING_LIST_REQUEST, workerGetUserFollowingList);
}

function getAuthenticateUserInfo(postData) {
	return accountApi.getUserInfoService(postData);
}
function* workerGetAuthenticateUserInfo(action) {
	try {
		const response = yield call(getAuthenticateUserInfo, action.postData);
		const data = response && response.data;
		setLocalStorage('userInfo', data);
		setLocalStorage('userToken', data.node_id);
		yield put(ActionAccount.getAuthenticateUserInfoSuccess(data));
		yield put(ActionRepository.getRepositoryList(data.login));
		yield put(ActionActivity.getUserPublicEvents(data.login));
	} catch (error) {
		if (error && error.message) {
			toast.error(error.message.toString());
			console.log(error);
		}
		yield put(ActionAccount.getAuthenticateUserInfoFailure());
	}
}

function getUserFollowerList(postData) {
	return accountApi.getUserFollowerListService(postData);
}
function* workerGetUserFollowerList(action) {
	try {
		const response = yield call(getUserFollowerList, action.postData);
		const data = response && response.data;
		yield put(ActionAccount.getUserFollowerListSuccess(data));
	} catch (error) {
		if (error && error.message) {
			toast.error(error.message.toString());
			console.log(error);
		}
		yield put(ActionAccount.getUserFollowingListFailure());
	}
}

function getUserFollowingList(postData) {
	return accountApi.getUserFollowingListService(postData);
}
function* workerGetUserFollowingList(action) {
	try {
		const response = yield call(getUserFollowingList, action.postData);
		const data = response && response.data;
		yield put(ActionAccount.getUserFollowingListSuccess(data));
	} catch (error) {
		if (error && error.message) {
			toast.error(error.message.toString());
			console.log(error);
		}
		yield put(ActionAccount.getUserFollowerListFailure());
	}
}
