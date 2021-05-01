import { About } from '../../style';
import { getPercent } from '../../../../helper/math';

export default props => {
	const { description, languages } = props;
	console.log(languages);
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
				{languages &&
					Object.keys(languages).length !== 0 &&
					Object.keys(languages).map((item, key) => {
						if (item !== 'totalCounts') {
							return (
								<div className="repository-languages-item" key={key}>
									<i className="fa fa-circle repository-languages-item-list-type" />
									{item} <span className="">{getPercent(languages[item], languages.totalCounts)} %</span>
								</div>
							);
						}
					})}
			</div>
		</About>
	);
};
