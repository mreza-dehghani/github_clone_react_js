import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import RootSaga from '../sagas';
import Reducer from '../reducers';
import { History } from '../helper/history';

const sagaMiddleware = createSagaMiddleware();

let middlewares = compose(applyMiddleware(routerMiddleware(History), sagaMiddleware));

if (process.env.NODE_ENV === 'development') {
	let reduxDevTools = window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__();

	if (reduxDevTools) {
		middlewares = compose(applyMiddleware(routerMiddleware(History), sagaMiddleware), reduxDevTools);
	} else {
		middlewares = compose(applyMiddleware(routerMiddleware(History), sagaMiddleware));
	}
}

export default function configStore() {
	const store = createStore(Reducer(History), middlewares);
	sagaMiddleware.run(RootSaga);
	return store;
}
