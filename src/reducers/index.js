import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Auth from './auth';
import { History } from '../helper/history';

export default () =>
	combineReducers({
		router: connectRouter(History),
		Auth,
	});
