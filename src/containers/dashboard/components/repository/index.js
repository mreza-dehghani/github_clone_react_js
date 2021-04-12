import { Link } from 'react-router-dom';

export default () => {
	return (
		<div className="repository-card">
			<Link className="repository-link">resitory_full_name</Link>
			<div>description name</div>
			<div className="mt-2">updated at</div>
		</div>
	);
};
