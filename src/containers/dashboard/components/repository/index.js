import { Link } from 'react-router-dom';
import { getDifferenceTimeFromNow, getFullDate } from '../../../../helper/date';

export default props => {
	const { username, name, updatedAt, lang, description } = props;
	return (
		<div className="repository-card">
			<Link to={`/${username}/${name}`} className="repository-link">
				{name}
			</Link>
			<div>{description}</div>
			<div className="mt-2 d-flex justify-content-start align-items-center">
				<div>{lang}</div>
				<div className={`${lang && 'ml-3'} repository-updated-at`}>
					<b>{getFullDate(updatedAt)}</b> <span className="ml-3">{getDifferenceTimeFromNow(updatedAt)}</span>
				</div>
			</div>
		</div>
	);
};
