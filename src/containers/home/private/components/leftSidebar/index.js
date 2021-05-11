import { Link } from 'react-router-dom';
import { Sidebar } from '../../style';

export default () => {
	return (
		<Sidebar>
			<b>Repositories</b>
			<div className="mt-2 d-flex flex-column">
				<div className="mb-2">
					<i className="fa fa-book mr-2" />
					<Link to="/" className="repository-link">
						test
					</Link>
				</div>
				<div className="mb-2">
					<i className="fa fa-book mr-2" />
					<Link to="/" className="repository-link">
						test
					</Link>
				</div>
				<div className="mb-2">
					<i className="fa fa-book mr-2" />
					<Link to="/" className="repository-link">
						test
					</Link>
				</div>
				<div className="mb-2">
					<i className="fa fa-book mr-2" />
					<Link to="/" className="repository-link">
						test
					</Link>
				</div>
			</div>
			<div className="mt-3 border-top pt-3">
				<b>Working with a team?</b>
				<p className="my-2">
					GitHub is built for collaboration. Set up an organization to improve the way your team works together, and get
					access to more features.
				</p>
			</div>
		</Sidebar>
	);
};
