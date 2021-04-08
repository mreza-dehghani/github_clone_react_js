import { NavLink } from 'react-router-dom';
import { Create, Dropdown } from '../../style';
import dropdownItems from './dropdownItems';

export default ({ show }) => {
	return (
		<Create>
			<i className="fa fa-plus header-plus-icon" />
			<i className="fa fa-caret-down header-angle-icon" style={{ marginLeft: '5px' }} />
			{show && (
				<Dropdown>
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
				</Dropdown>
			)}
		</Create>
	);
};
