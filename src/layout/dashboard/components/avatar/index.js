import { NavLink } from 'react-router-dom';
import { Avatar, Dropdown } from '../../style';
import dropdownItems from './dropdownItems';

export default ({ show }) => {
	return (
		<Avatar>
			<img src="" alt="avatar" className="header-avatar-image" />
			<i className="fa fa-caret-down header-angle-icon" />
			{show && (
				<Dropdown>
					<div className="dropdown-item-header">
						<div className="dropdown-item-header-title">Signed in as</div>
						<div className="dropdown-item-header-username">mohammadreza</div>
					</div>
					<div className="dropdown-item-list">
						{dropdownItems &&
							dropdownItems.map((item, key) => {
								return (
									<NavLink to={item.path} exact className="dropdown-item">
										{item.name}
									</NavLink>
								);
							})}
					</div>
					<div className="dropdown-item-footer">
						<div className="dropdown-item-list">
							<NavLink to="/login" exact className="dropdown-item">
								Sign out
							</NavLink>
						</div>
					</div>
				</Dropdown>
			)}
		</Avatar>
	);
};