import { all } from 'redux-saga/effects';
import { watcherAuth } from './auth';

export default function* rootSaga() {
	yield all([watcherAuth()]);
}
