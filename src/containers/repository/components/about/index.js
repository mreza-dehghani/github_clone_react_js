import { About } from '../../style';

export default props => {
	const { description, languages } = props;
	return (
		<About>
			<div className="repository-title">About</div>
			<div className="repository-description">{description}</div>
			<div className="repository-title mt-3">Releases</div>
			<div className="repository-small-text">No releases published</div>
			<div className="repository-title mt-3">Packages</div>
			<div className="repository-small-text">No Packages published</div>
			<div className="repository-title mt-3">Languages</div>
			<div className="repository-languages my-1">
				<div className="repository-languages-item">
					<i className="fa fa-circle repository-languages-item-list-type" />
					javascript
				</div>
				<div className="repository-languages-item">
					<i className="fa fa-circle repository-languages-item-list-type" />
					javascript
				</div>
				<div className="repository-languages-item">
					<i className="fa fa-circle repository-languages-item-list-type" />
					javascript
				</div>
				<div className="repository-languages-item">
					<i className="fa fa-circle repository-languages-item-list-type" />
					javascript
				</div>
				<div className="repository-languages-item">
					<i className="fa fa-circle repository-languages-item-list-type" />
					javascript
				</div>
			</div>
		</About>
	);
};
