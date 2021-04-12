import Searchbar from '../../../../components/searchbar';
import Button from '../../../../components/button';

export default () => {
	return (
		<div className="d-flex justify-content-start align-items-center repository-filter">
			<Searchbar styleType="pure" placeholder="search repository" onChange={e => console.log(e)} />
			<div className="position-relative">
				<Button type="secondary-outline" size="sm" onClick={() => console.log(true)} classes="py-1" loading={false}>
					<div>
						type
						<i className="fa fa-caret-down" style={{ marginLeft: '5px' }} />
					</div>
				</Button>
				<div className="repository-type-dropdown">
					<div className="repository-type-dropdown-title">
						type
						<i className="fa fa-close" />
					</div>
					<div className="repository-type-dropdown-item">item</div>
					<div className="repository-type-dropdown-item">item</div>
					<div className="repository-type-dropdown-item">item</div>
				</div>
			</div>
			<Button type="success" size="sm" onClick={() => console.log(true)} classes="ml-2" loading={false}>
				<div>New</div>
			</Button>
		</div>
	);
};
