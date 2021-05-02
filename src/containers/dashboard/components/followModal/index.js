import Modal from '../../../../components/modal';
import Button from '../../../../components/button';
import { useEffect } from 'react';
import Spinner from '../../../../components/spinner';
import { History } from '../../../../helper/history';

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
		unfollowUser,
		unfollowUserLoading,
		activeUnfollowId,
		setActiveUnfollowId,
	} = props;

	useEffect(() => {
		if (showFollowModal.type === 'follower') {
			getUserFollowerList(username);
		} else if (showFollowModal.type === 'following') {
			getUserFollowingList(username);
		}
	}, [showFollowModal]);

	const onLinkClick = link => {
		History.push(link);
		closeHandler();
	};

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
						<User
							onLinkClick={onLinkClick}
							onBtnClick={username => unfollowUser(username)}
							key={key}
							item={item}
							type={showFollowModal.type}
						/>
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
						<User
							onLinkClick={onLinkClick}
							onBtnClick={username => {
								unfollowUser(username);
								setActiveUnfollowId(item.id);
							}}
							key={key}
							item={item}
							type={showFollowModal.type}
							loading={unfollowUserLoading && activeUnfollowId === item.id}
						/>
					);
				})}
		</Modal>
	);
};

const User = ({ type, item, onLinkClick, onBtnClick, loading }) => {
	return (
		<div className="d-flex justify-content-between align-items-center follower-container">
			<div className="d-flex justify-content-between align-items-center">
				<div onClick={() => onLinkClick(`/user/${item.login}`)} className="pointer">
					<img src={item.avatar_url} alt="user_avatar" className="user-info-avatar" />
				</div>
				<div className="ml-3">
					<div onClick={() => onLinkClick(`/user/${item.login}`)} className="user-info-full-name pointer">
						{item.login}
					</div>
				</div>
			</div>
			<Button type="secondary-outline" size="sm" onClick={() => onBtnClick(item.login)} classes="py-1" loading={false}>
				{loading ? 'Loading...' : <div>{type === 'following' ? 'Unfollow' : 'Profile'}</div>}
			</Button>
		</div>
	);
};
