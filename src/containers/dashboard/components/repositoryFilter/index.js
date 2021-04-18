import { useState } from 'react';
import Searchbar from '../../../../components/searchbar';
import Button from '../../../../components/button';
import { History } from '../../../../helper/history';

export default props => {
	const { searchFilterRef, filter, username, setSearchFilter, setTypeFilter } = props;
	const [showDropdown, setShowDropdown] = useState(false);
	const types = ['all', 'public', 'private'];

	return (
		<div className="d-flex justify-content-start align-items-center repository-filter">
			<Searchbar
				styleType="pure"
				placeholder="search repository"
				onChange={e => setSearchFilter(e.target.value)}
				searchbarRef={searchFilterRef}
			/>
			<div className="position-relative">
				<Button
					type="secondary-outline"
					size="sm"
					onClick={() => setShowDropdown(!showDropdown)}
					classes="py-1"
					loading={false}
				>
					<div>
						type
						<i className="fa fa-caret-down" style={{ marginLeft: '5px' }} />
					</div>
				</Button>
				{showDropdown && (
					<div className="repository-type-dropdown">
						<div className="repository-type-dropdown-title" onClick={() => setShowDropdown(!showDropdown)}>
							type
							<i className="fa fa-close" />
						</div>
						{types &&
							types.map((item, key) => (
								<div
									className="repository-type-dropdown-item"
									key={key}
									onClick={() => {
										setTypeFilter(item);
										setShowDropdown(!showDropdown);
									}}
								>
									{item}
									{item === filter && <i className="fa fa-check " />}
								</div>
							))}
					</div>
				)}
			</div>
			<Button
				type="success"
				size="sm"
				onClick={() => History.push(`/user/${username}/create-repository`)}
				classes="ml-2"
				loading={false}
			>
				<div>New</div>
			</Button>
		</div>
	);
};
