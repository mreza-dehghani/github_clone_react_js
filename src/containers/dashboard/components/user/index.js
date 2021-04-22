import * as Card from '../../../../components/card';
import Button from '../../../../components/button';

export default props => {
	const {
		avatar,
		name,
		username,
		bio,
		profileOnClick,
		followersCount,
		followingCount,
		openFollowerModal,
		disabledLink,
		unfollowUser,
	} = props;

	const onUserFollowerClick = (title, type) => {
		if (!disabledLink) {
			openFollowerModal(title, type);
		}
	};

	return (
		<Card.Card>
			<Card.Header>
				<div className="user-info">
					<div className="user-info-header">
						<img src={avatar} alt="avatar" className="user-info-avatar" />
						<div className="user-info-full-name">{name}</div>
						<div className="user-info-user-name">{username}</div>
						<div className="user-info-user-bio">{bio}</div>
						<Button
							type="secondary-outline"
							size="sm"
							onClick={() => {
								disabledLink ? unfollowUser(username) : profileOnClick();
							}}
							classes="mt-3"
							loading={false}
						>
							{disabledLink ? 'Unfollow' : 'Edit'}
						</Button>
					</div>
				</div>
			</Card.Header>
			<Card.Body>
				<div className="user-info-body">
					<div className="user-info-followers" onClick={() => onUserFollowerClick('Follower', 'follower')}>
						<div>followers</div>
						<b>{followersCount}</b>
					</div>
					<div className="user-info-followers" onClick={() => onUserFollowerClick('Following', 'following')}>
						<div>following</div>
						<b>{followingCount}</b>
					</div>
				</div>
			</Card.Body>
		</Card.Card>
	);
};
