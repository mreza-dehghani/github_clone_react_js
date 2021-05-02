import { Link } from 'react-router-dom';
import Button from '../../../../components/button';

export default ({ userName, repoName, counts }) => {
	return (
		<div className="d-flex justify-content-between align-items-center header">
			<div>
				<Link to={`/user/${userName}`}>
					<b>{userName}</b>
				</Link>
				<b className="mx-1">/</b>
				<Link to={`/user/${userName}/${repoName}`}>
					<b>{repoName}</b>
				</Link>
			</div>
			<div className="d-flex justify-content-end align-items-center">
				<Button type="secondary-outline" size="sm" onClick={() => console.log(true)} classes="ml-2" loading={false}>
					<div className="d-flex justify-content-between align-items-center w-100">
						<div>
							<i className="fa fa-eye mr-1" />
							watch
						</div>
						<b>{counts.watch}</b>
					</div>
				</Button>
				<Button type="secondary-outline" size="sm" onClick={() => console.log(true)} classes="ml-2" loading={false}>
					<div className="d-flex justify-content-between align-items-center w-100">
						<div>
							<i className="fa fa-star mr-1" />
							star
						</div>
						<b>{counts.star}</b>
					</div>
				</Button>
				<Button type="secondary-outline" size="sm" onClick={() => console.log(true)} classes="ml-2" loading={false}>
					<div className="d-flex justify-content-between align-items-center w-100">
						<div>
							<i className="fa fa-code-fork mr-1" />
							fork
						</div>
						<b>{counts.fork}</b>
					</div>
				</Button>
			</div>
		</div>
	);
};
