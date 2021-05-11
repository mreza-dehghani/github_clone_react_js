import { Link } from 'react-router-dom';
import avatar from '../../../../../assets/img/avatar.svg';

export default () => {
	return (
		<div className="public-event-card mb-3 pb-4">
			<img src={avatar} alt="" />
			<div className="w-100 ml-3">
				<b>username</b>
				<span className="ml-2">3 day ago</span>
				<div className="public-event-repository-card mt-2">
					<div className="my-1">
						<div className="public-event-title mb-1">title type</div>
						<div className="d-flex flex-column ">
							<Link to={`/`} className="with-three-dot">
								fghdf
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
