import { all } from 'redux-saga/effects';
import { watcherAuth } from './auth';
import { watcherAccount } from './account';
import { watcherRepository } from './repository';
import { watcherActivity } from './activity';

export default function* rootSaga() {
	yield all([watcherAuth(), watcherAccount(), watcherRepository(), watcherActivity()]);
}
