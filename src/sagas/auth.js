import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../constants/actionTypes';
import * as authApi from '../apis/auth';
import { ActionAuth } from '../actions';
import { setLocalStorage } from '../helper/localStorage';
import { History } from '../helper/history';

export function* watcherAuth() {
	yield takeLatest(types.LOGIN_REQUEST, workerLogin);
}

function login(postData) {
	return authApi.loginService(postData);
}
function* workerLogin(action) {
	try {
		const response = yield call(login, action.postData);
		const data = response.data;
		setLocalStorage('userInfo', data);
		setLocalStorage('userToken', data.node_id);
		yield put(ActionAuth.loginSuccess(data));
		if (response.status !== 404 && response.status === 200) {
			History.replace(`/user/${data.login}`);
		}
	} catch (error) {
		if (error) {
			toast.error('Error!');
			console.log(error);
		}
		yield put(ActionAuth.loginFailure());
	}
}
