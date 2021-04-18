import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../constants/actionTypes';
import { ActionActivity } from '../actions';
import * as activityApi from '../apis/activity';

export function* watcherActivity() {
	yield takeLatest(types.GET_USER_PUBLIC_EVENTS_REQUEST, workerGetUserPublicEvents);
}

function getUserPublicEvents(postData) {
	return activityApi.getUserPublicEventsService(postData);
}
function* workerGetUserPublicEvents(action) {
	try {
		const response = yield call(getUserPublicEvents, action.postData);
		const data = response && response.data;
		yield put(ActionActivity.getUserPublicEventsSuccess(data));
	} catch (error) {
		if (error && error.message) {
			toast.error(error.message.toString());
			console.log(error);
		}
		yield put(ActionActivity.getUserPublicEventsFailure());
	}
}
