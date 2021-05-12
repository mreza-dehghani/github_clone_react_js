import { Link } from 'react-router-dom';
import { Avatar, Dropdown } from '../../style';
import dropdownItems from './dropdownItems';
import avatar from '../../../../assets/img/avatar.svg';

export default ({ show, toggle, userInfo, showConfirmModal }) => {
	return (
		<Avatar>
			<div onClick={toggle}>
				<img src={userInfo?.avatar || avatar} alt="avatar" className="header-avatar-image mr-1" />
				<i className="fa fa-caret-down header-angle-icon" />
			</div>
			{show && (
				<Dropdown>
					<div className="dropdown-item-header">
						<div className="dropdown-item-header-title">Signed in as</div>
						<div className="dropdown-item-header-username">{userInfo?.fullName}</div>
					</div>
					<div className="dropdown-item-list">
						{dropdownItems(userInfo) &&
							dropdownItems(userInfo).map((item, key) => {
								return (
									<Link to={item.path} exact className="dropdown-item">
										{item.name}
									</Link>
								);
							})}
					</div>
					<div className="dropdown-item-footer">
						<div className="dropdown-item-list">
							<div className="dropdown-item" onClick={showConfirmModal}>
								Sign out
							</div>
						</div>
					</div>
				</Dropdown>
			)}
		</Avatar>
	);
};
