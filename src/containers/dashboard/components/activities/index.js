import { Link } from 'react-router-dom';
import { getDifferenceTimeFromNow } from '../../../../helper/date';
export default props => {
	const { date, items } = props;
	return (
		<div className="activities mb-4">
			<div className="d-flex justify-content-start align-items-center ">
				<div className="mr-4">
					<b>{date}</b> <span className="ml-3">{getDifferenceTimeFromNow(date)}</span>
				</div>
				<div className="activities-date-seprator" />
			</div>
			<div className="px-4 my-2">
				{items &&
					items.map((item, key) => (
						<div className="mb-4 pb-1">
							<div className="activities-title mb-1">{item.type}</div>
							<div className="d-flex flex-column ">
								<Link to={`/user/${item.repo.name}`} key={key}>
									{item.repo.url}
								</Link>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};
