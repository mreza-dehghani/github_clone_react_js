import { NavLink } from 'react-router-dom';

export default () => {
	return (
		<div className="activities mb-4">
			<div className="d-flex justify-content-start align-items-center ">
				<div className="mr-4">April 2021</div>
				<div className="activities-date-seprator" />
			</div>
			<div className="px-4 my-2">
				<div className="activities-title mb-2">title</div>
				<div className="d-flex flex-column ">
					<NavLink to="#">test</NavLink>
					<NavLink to="#">test</NavLink>
					<NavLink to="#">test</NavLink>
				</div>
			</div>
		</div>
	);
};
