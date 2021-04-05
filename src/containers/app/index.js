import { Route, Switch } from 'react-router-dom';
import { DashboardLayout, PublicLayout } from '../../layout';
import { ConnectedRouter } from 'connected-react-router';
import { History } from '../../helper/history';
import Routes from '../../router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default () => {
	const layoutManage = (item, key) => {
		switch (item.layout) {
			case 'dashboard':
				return (
					<Route
						key={key}
						exact={true}
						path={item.path}
						render={route => <DashboardLayout route={route} Component={item.component} options={item.options || {}} />}
					/>
				);
			case 'public':
				return (
					<Route
						key={key}
						exact={true}
						path={item.path}
						render={route => <PublicLayout route={route} Component={item.component} options={item.options || {}} />}
					/>
				);
		}
	};

	const switchRoutes = () => {
		return Routes.map((route, key) => {
			return layoutManage(route, key);
		});
	};

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
			<Switch>{switchRoutes()}</Switch>
		</ConnectedRouter>
	);
};
