import * as Card from '../../../../components/card';
import Button from '../../../../components/button';

export default () => {
	return (
		<Card.Card>
			<Card.Header>
				<div className="user-info">
					<div className="user-info-header">
						<img src="" alt="avatar" className="user-info-avatar" />
						<div className="user-info-full-name">mohammadreza</div>
						<div className="user-info-user-name">username</div>
						<div className="user-info-user-bio">bio</div>
						<Button type="secondary-outline" size="sm" onClick={() => console.log(true)} classes="mt-3" loading={false}>
							Edit
						</Button>
					</div>
				</div>
			</Card.Header>
			<Card.Body>
				<div className="user-info-body">
					<div className="user-info-followers">
						<div>followers</div>
						<b>20</b>
					</div>
					<div className="user-info-followers">
						<div>following</div>
						<b>20</b>
					</div>
				</div>
			</Card.Body>
		</Card.Card>
	);
};
