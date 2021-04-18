import Modal from '../../../../components/modal';
import Button from '../../../../components/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Spinner from '../../../../components/spinner';

export default props => {
	const {
		showFollowModal,
		closeHandler,
		clickHandler,
		getUserFollowerList,
		getUserFollowingList,
		username,
		getUserFollowerListLoading,
		getUserFollowerListData,
		getUserFollowingListLoading,
		getUserFollowingListData,
	} = props;

	useEffect(() => {
		if (showFollowModal.type === 'follower') {
			getUserFollowerList(username);
		} else if (showFollowModal.type === 'following') {
			getUserFollowingList(username);
		}
	}, [showFollowModal]);

	return (
		<Modal show={showFollowModal.show} header={{ title: showFollowModal.title }} closeHandler={closeHandler}>
			{showFollowModal.type === 'follower' && getUserFollowerListLoading && (
				<div className="d-flex justify-content-center align-items-center">
					<Spinner />
				</div>
			)}
			{showFollowModal.type === 'follower' &&
				getUserFollowerListData &&
				getUserFollowerListData.map((item, key) => {
					return (
						<div className="d-flex justify-content-between align-items-center follower-container" key={key}>
							<div className="d-flex justify-content-between align-items-center">
								<Link to="/">
									<img src={item.avatar_url} alt="user_avatar" className="user-info-avatar" />
								</Link>
								<div className="ml-3">
									<Link to="/" className="user-info-full-name">
										{item.login}
									</Link>
								</div>
							</div>
							<Button type="secondary-outline" size="sm" onClick={() => clickHandler()} classes="py-1" loading={false}>
								<div>Unfollow</div>
							</Button>
						</div>
					);
				})}
			{showFollowModal.type === 'following' && getUserFollowingListLoading && (
				<div className="d-flex justify-content-center align-items-center">
					<Spinner />
				</div>
			)}
			{showFollowModal.type === 'following' &&
				getUserFollowingListData &&
				getUserFollowingListData.map((item, key) => {
					return (
						<div className="d-flex justify-content-between align-items-center follower-container" key={key}>
							<div className="d-flex justify-content-between align-items-center">
								<Link to="/">
									<img src={item.avatar_url} alt="user_avatar" className="user-info-avatar" />
								</Link>
								<div className="ml-3">
									<Link to="/" className="user-info-full-name">
										{item.login}
									</Link>
								</div>
							</div>
							<Button type="secondary-outline" size="sm" onClick={() => clickHandler()} classes="py-1" loading={false}>
								<div>Profile</div>
							</Button>
						</div>
					);
				})}
		</Modal>
	);
};
