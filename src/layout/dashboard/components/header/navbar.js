import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default () => {
	const [active, setActive] = useState(null);
	return (
		<nav className="header-navbar">
			<ul className="header-navbar-list">
				{navlist &&
					navlist.map((navItem, key) => {
						return (
							<li className="header-navbar-list-item">
								<NavLink
									key={key}
									exact
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
		path: '/',
	},
	{
		id: 1,
		title: 'Issues',
		path: '/',
	},
	{
		id: 2,
		title: 'Marketplace',
		path: '/',
	},
	{
		id: 3,
		title: 'Explore',
		path: '/',
	},
];
