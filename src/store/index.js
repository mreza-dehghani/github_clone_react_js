import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import RootSaga from '../sagas';
import rootReducer from '../reducers';
import { History } from '../helper/history';

const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
let Middlewares = compose(applyMiddleware(routerMiddleware(History), sagaMiddleware));
if (process.env.NODE_ENV === 'development') {
	let reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

	if (reduxDevTools) {
		Middlewares = compose(applyMiddleware(routerMiddleware(History), sagaMiddleware), reduxDevTools);
	} else {
		Middlewares = compose(applyMiddleware(routerMiddleware(History), sagaMiddleware));
	}
}

export default function configureStore() {
	const store = createStore(rootReducer(History), Middlewares);
	// run the saga
	sagaMiddleware.run(RootSaga);
	return store;
}
