import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from '../helper/history';
import Auth from './auth';
import Account from './account';
import Repository from './repository';
import Activity from './activity';

export default () =>
	combineReducers({
		router: connectRouter(History),
		Auth,
		Account,
		Repository,
		Activity,
	});
