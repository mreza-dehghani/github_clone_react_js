import { Header } from '../../style';
import Navbar from './navbar';
import Searchbar from '../../../../components/searchbar';
import Avatar from '../avatar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default props => {
	const { toggleDropdown, showDropdown, userInfo, showConfirmModal } = props;
	const [showNavbar, setShowNavbar] = useState(false);

	const toggleNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	return (
		<Header>
			<div className="header-container">
				<Link to="/">
					<i className="fa fa-github app-icon" />
				</Link>
				<i className="fa fa-bars app-icon ml-3 header-menu-icon" onClick={toggleNavbar} />
				<div class="header-search-bar">
					<Searchbar placeholder="search" onChange={e => console.log(e)} />
				</div>
				<Navbar show={showNavbar} toggle={toggleNavbar} />
				<div className="header-avatar-wrapper">
					<Avatar toggle={toggleDropdown} show={showDropdown} userInfo={userInfo} showConfirmModal={showConfirmModal} />
				</div>
			</div>
		</Header>
	);
};
