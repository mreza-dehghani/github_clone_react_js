import { Link } from 'react-router-dom';
import { Sidebar } from '../../style';

export default ({ data, username }) => {
	return (
		<Sidebar>
			<b>Repositories</b>
			<div className="mt-2 d-flex flex-column">
				{data.length !== 0 &&
					data.map((item, key) => {
						return (
							<div className="mb-2 d-flex justify-content-start align-items-center" key={key}>
								<i className="fa fa-book mr-2" />
								<Link to={`/${item.full_name}`} className="repository-link with-three-dot">
									{item.name}
								</Link>
							</div>
						);
					})}
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
