import { Header } from '../../style';
import Navbar from './navbar';
import Searchbar from '../../../../components/searchbar';
import Avatar from '../avatar';
import Create from '../create';

export default () => {
	return (
		<Header>
			<div className="header-container">
				<i className="fa fa-github app-icon" />
				<Searchbar placeholder="search" onChange={e => console.log(e)} />
				<Navbar />
				<div className="header-avatar-wrapper">
					<Create />
					<Avatar />
				</div>
			</div>
		</Header>
	);
};
