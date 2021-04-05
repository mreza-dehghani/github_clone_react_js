import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Auth from './auth';

export default history => {
	return combineReducers({
		router: connectRouter(history),
		Auth,
	});
};
