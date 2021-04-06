import { Switch, Route } from 'react-router-dom';
import { DashboardLayout, PublicLayout } from '../../layout';
import { ConnectedRouter } from 'connected-react-router';
import { History } from '../../helper/history';
import Routes from '../../router';
import { withRouter } from 'react-router';
import NotFound from '../../components/notFound';
import { getLocalStorage, getLocalStorageWithExpiry } from '../../helper/localStorage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '../../style/global/index.css';

export default () => {
	const layoutManage = (item, key) => {
		switch (item.layout) {
			case 'dashboard':
				return (
					<Route
						key={key}
						exact={true}
						path={item.path}
						render={withRouter(route => (
							<DashboardLayout route={route} Component={item.component} options={item.options || {}} />
						))}
					/>
				);
			case 'public':
				return (
					<Route
						key={key}
						exact={true}
						path={item.path}
						render={withRouter(route => (
							<PublicLayout route={route} Component={item.component} options={item.options || {}} />
						))}
					/>
				);
			default:
				return (
					<Route key={key} exact={true} path={item.path} component={item.component} options={item.options || {}} />
				);
		}
	};

	const switchRoutes = () => {
		return Routes.map((route, key) => {
			return layoutManage(route, key);
		});
	};

	const validPath = ['/login'];

	if (
		!getLocalStorage('userToken') &&
		(validPath.indexOf(window.location.pathname) === -1 || window.location.pathname === '/')
	) {
		window.location.replace('/login');
		return null;
	} else {
		return (
			<ConnectedRouter history={History}>
				<ToastContainer
					position="bottom-right"
					autoClose={parseInt(process.env.REACT_APP_TOASTER_CLOSE_TIMEOUT, 10)}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<Switch>
					{switchRoutes()}
					<Route component={NotFound} />
				</Switch>
			</ConnectedRouter>
		);
	}
};
