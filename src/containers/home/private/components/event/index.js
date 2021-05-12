import { Link } from 'react-router-dom';
import avatar from '../../../../../assets/img/avatar.svg';
import { getDifferenceTimeFromNow } from '../../../../../helper/date';

export default ({ data }) => {
	return (
		<div className="public-event-card mb-3 pb-4">
			<img src={data.actor.avatar_url || avatar} alt="" />
			<div className="w-100 ml-3 with-three-dot">
				<b>{data.actor.display_login || 'username'}</b>
				<span className="ml-2">{getDifferenceTimeFromNow(data.created_at)}</span>
				<div className="public-event-repository-card mt-2">
					<div className="my-1">
						<div className="public-event-title mb-1 with-three-dot">{data.type}</div>
						<div className="d-flex justify-content-start">
							<Link to={`/${data.repo.name}`} className="with-three-dot">
								{data.repo.name}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
