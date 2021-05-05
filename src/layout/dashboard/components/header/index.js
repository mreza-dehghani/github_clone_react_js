import { Header } from '../../style';
import Navbar from './navbar';
import Searchbar from '../../../../components/searchbar';
import Avatar from '../avatar';
import { useState } from 'react';

export default props => {
	const { toggleDropdown, showDropdown, userInfo } = props;
	const [showNavbar, setShowNavbar] = useState(false);

	const toggleNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	return (
		<Header>
			<div className="header-container">
				<i className="fa fa-github app-icon" />
				<i className="fa fa-bars app-icon ml-3 header-menu-icon" onClick={toggleNavbar} />
				<div class="header-search-bar">
					<Searchbar placeholder="search" onChange={e => console.log(e)} />
				</div>
				<Navbar show={showNavbar} toggle={toggleNavbar} />
				<div className="header-avatar-wrapper">
					<Avatar toggle={toggleDropdown} show={showDropdown} userInfo={userInfo} />
				</div>
			</div>
		</Header>
	);
};
