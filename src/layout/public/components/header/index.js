import { Header } from '../../style';
import Navbar from './navbar';
import Button from '../../../../components/button';
import { History } from '../../../../helper/history';

export default () => {
	return (
		<Header>
			<div className="header-container">
				<i className="fa fa-github app-icon" />
				<Navbar />
				<div className="header-sign-in">
					<Button size="sm" onClick={() => History.push('/login')} type="secondary-outline">
						Sign In
					</Button>
				</div>
			</div>
		</Header>
	);
};
