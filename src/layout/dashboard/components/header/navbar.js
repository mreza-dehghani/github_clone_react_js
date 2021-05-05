import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default ({ show, toggle }) => {
	const [active, setActive] = useState(null);
	return (
		<nav className={`header-navbar ${show ? 'header-navbar-show' : 'header-navbar-hide'}`}>
			<div className="header-close-menu-icon" onClick={toggle}>
				<i className="fa fa-times text-white" />
			</div>
			<ul className="header-navbar-list">
				{navlist &&
					navlist.map((navItem, key) => {
						return (
							<li className="header-navbar-list-item">
								<NavLink
									key={key}
									exact={true}
									to={navItem.path}
									className="header-navbar-list-item-link"
									activeClassName=""
									onClick={() => setActive(navItem.id)}
								>
									<span
										className={`header-navbar-list-item-link ${
											active === navItem.id ? 'header-navbar-list-item-link-active' : ''
										}`}
									>
										{navItem.title}
									</span>
								</NavLink>
							</li>
						);
					})}
			</ul>
		</nav>
	);
};

const navlist = [
	{
		id: 0,
		title: 'Pull requests',
		path: '/pulls',
	},
	{
		id: 1,
		title: 'Issues',
		path: '/issues',
	},
	{
		id: 2,
		title: 'Marketplace',
		path: '/marketplace',
	},
	{
		id: 3,
		title: 'Explore',
		path: '/explore',
	},
];
