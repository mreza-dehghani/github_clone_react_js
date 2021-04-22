import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { Wrapper, Main, Sidebar } from './style';
import User from './components/user';
import Repository from './components/repository';
import RepositoryFilter from './components/repositoryFilter';
import Activities from './components/activities';
import UserLinks from './components/userLinks';
import FollowModal from './components/followModal';
import { ActionAccount, ActionActivity, ActionRepository } from '../../actions';
import { getLocalStorage } from '../../helper/localStorage';
import FullScreenLoading from '../../components/fullScreenLoading';

const Dashboard = props => {
	const {
		getAuthenticateUserInfo,
		getOtherUserInfo,
		getUserInfoLoading,
		getUserInfoData,
		getRepositoryListLoading,
		getRepositoryListData,
		isRepositoryFilter,
		getUserPublicEventsLoading,
		getUserPublicEventsData,
		repositoryFilterBySearch,
		repositoryFilterByType,
		clearRepositoryFilter,
		getUserFollowerList,
		getUserFollowingList,
		getUserFollowerListLoading,
		getUserFollowerListData,
		getUserFollowingListLoading,
		getUserFollowingListData,
		unfollowUser,
		clearData,
	} = props;
	const router = useParams();
	const userInfo = getLocalStorage('userInfo');
	const paramsUsername = router.username;
	const [searchFilter, setSearchFilter] = useState(null);
	const [typeFilter, setTypeFilter] = useState(null);
	const [showFollowModal, setShowFollowModal] = useState({
		show: false,
		title: '',
		type: '',
	});
	const searchFilterRef = useRef();

	useEffect(() => {
		if (paramsUsername === userInfo.login) {
			getAuthenticateUserInfo(userInfo.login);
		} else {
			getOtherUserInfo(paramsUsername);
		}
		fetch(`${process.env.REACT_APP_API_URL}/repos/mreza-dehghani/github_clone_react_js`)
			.then(res => res.json())
			.then(result => console.log(result));
		return () => {
			clearData();
		};
	}, [paramsUsername]);

	useEffect(() => {
		if (searchFilter) {
			repositoryFilterBySearch(searchFilter);
		}
	}, [searchFilter]);

	useEffect(() => {
		if (typeFilter) {
			repositoryFilterByType(typeFilter);
		}
	}, [typeFilter]);

	const clearFilter = () => {
		searchFilterRef.current.value = null;
		clearRepositoryFilter();
		setTypeFilter(null);
		setSearchFilter(null);
	};

	const openFollowerModal = (title, type) => {
		setShowFollowModal({
			show: true,
			title: title,
			type: type,
		});
	};

	return (
		<Wrapper>
			<FollowModal
				showFollowModal={showFollowModal}
				closeHandler={() => setShowFollowModal({ show: false, title: '', type: '' })}
				getUserFollowerList={getUserFollowerList}
				getUserFollowingList={getUserFollowingList}
				username={paramsUsername}
				getUserFollowerListLoading={getUserFollowerListLoading}
				getUserFollowerListData={getUserFollowerListData}
				getUserFollowingListLoading={getUserFollowingListLoading}
				getUserFollowingListData={getUserFollowingListData}
				unfollowUser={unfollowUser}
			/>
			{getUserInfoLoading || getRepositoryListLoading || getUserPublicEventsLoading ? (
				<FullScreenLoading />
			) : (
				<>
					{Object.keys(getUserInfoData).length > 0 && (
						<>
							<Sidebar>
								<User
									avatar={getUserInfoData.avatar_url}
									name={getUserInfoData.name}
									username={getUserInfoData.login}
									bio={getUserInfoData.bio}
									profileOnClick={() => console.log(true)}
									followersCount={getUserInfoData.followers}
									followingCount={getUserInfoData.following}
									openFollowerModal={(title, type) => openFollowerModal(title, type)}
									disabledLink={paramsUsername !== userInfo.login}
									unfollowUser={unfollowUser}
								/>
								{getUserInfoData.links && <UserLinks data={getUserInfoData.links} />}
							</Sidebar>
							<Main>
								<div className="repos">
									<RepositoryFilter
										filter={typeFilter}
										username={getUserInfoData.login}
										setSearchFilter={setSearchFilter}
										setTypeFilter={setTypeFilter}
										searchFilterRef={searchFilterRef}
									/>
									<div className="d-flex justify-content-start align-items-start">
										{isRepositoryFilter && (
											<div className="px-3 py-1 mx-2 btn btn-secondary" onClick={clearFilter}>
												filter <i className="fa fa-close" />
											</div>
										)}
									</div>
									<div className="d-flex justify-content-start align-items-start flex-wrap ">
										{getRepositoryListData && getRepositoryListData.length > 0 ? (
											getRepositoryListData.map((item, key) => {
												return (
													<Repository
														key={key}
														username={getUserInfoData.login}
														updatedAt={item.updated_at}
														name={item.name}
														lang={item.language}
														description={item.description}
													/>
												);
											})
										) : (
											<div className="p-2 my-4 mx-2 badge-warning">
												<b>{getUserInfoData.login}</b> doesn't have any repositories that match.
											</div>
										)}
									</div>
								</div>
								{getUserPublicEventsData.length > 0 && (
									<div className="px-3">
										<div className="mt-4 mb-3">Contribution activity</div>
										{getUserPublicEventsData &&
											getUserPublicEventsData.map((item, index) => {
												return <Activities key={index} date={item.created_at} items={item.items} />;
											})}
									</div>
								)}
							</Main>
						</>
					)}
				</>
			)}
		</Wrapper>
	);
};

const mapStateToProps = state => {
	return {
		getUserInfoLoading: state.Account.getUserInfo.loading,
		getUserInfoData: state.Account.getUserInfo.data,
		getRepositoryListLoading: state.Repository.getRepositoryList.loading,
		getRepositoryListData: state.Repository.getRepositoryList.data,
		isRepositoryFilter: state.Repository.getRepositoryList.isFilter,
		getUserPublicEventsLoading: state.Activity.getUserPublicEvents.loading,
		getUserPublicEventsData: state.Activity.getUserPublicEvents.data,
		getUserFollowerListLoading: state.Account.getUserFollowerList.loading,
		getUserFollowerListData: state.Account.getUserFollowerList.data,
		getUserFollowingListLoading: state.Account.getUserFollowingList.loading,
		getUserFollowingListData: state.Account.getUserFollowingList.data,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAuthenticateUserInfo: postData => dispatch(ActionAccount.getAuthenticateUserInfo(postData)),
		getOtherUserInfo: postData => dispatch(ActionAccount.getOtherUserInfo(postData)),
		repositoryFilterBySearch: payload => dispatch(ActionRepository.repositoryFilterBySearch(payload)),
		repositoryFilterByType: payload => dispatch(ActionRepository.repositoryFilterByType(payload)),
		getUserFollowerList: postData => dispatch(ActionAccount.getUserFollowerList(postData)),
		getUserFollowingList: postData => dispatch(ActionAccount.getUserFollowingList(postData)),
		unfollowUser: postData => dispatch(ActionAccount.unfollowUser(postData)),
		clearRepositoryFilter: () => {
			dispatch(ActionRepository.clearRepositoryFilterBySearch());
			dispatch(ActionRepository.clearRepositoryFilterByType());
		},
		clearData: () => {
			dispatch(ActionAccount.getAuthenticateUserInfoFailure());
			dispatch(ActionAccount.getOtherUserInfoFailure());
			dispatch(ActionRepository.getRepositoryListFailure());
			dispatch(ActionActivity.getUserPublicEventsFailure());
			dispatch(ActionAccount.getUserFollowerListFailure());
			dispatch(ActionAccount.getUserFollowingListFailure());
			dispatch(ActionAccount.unfollowUserFailure());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
