import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../constants/actionTypes';
import { ActionAccount, ActionActivity, ActionRepository } from '../actions';
import * as accountApi from '../apis/account';
import { setLocalStorage } from '../helper/localStorage';

export function* watcherAccount() {
	yield takeLatest(types.GET_AUTHENTICATED_USER_INFO_REQUEST, workerGetAuthenticateUserInfo);
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
		if (error) {
			toast.error('Error!');
			console.log(error);
		}
		yield put(ActionAccount.getAuthenticateUserInfoFailure());
	}
}
