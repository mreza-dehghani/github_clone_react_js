import { useEffect } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';
import { Wrapper, Main, Sidebar } from './style';
import User from './components/user';
import Repository from './components/repository';
import RepositoryFilter from './components/repositoryFilter';
import Activities from './components/activities';
import UserLinks from './components/userLinks';
import { ActionAccount, ActionActivity, ActionRepository } from '../../actions';
import { getLocalStorage } from '../../helper/localStorage';
import FullScreenLoading from '../../components/fullScreenLoading';
import Spinner from '../../components/spinner';

const Dashboard = props => {
	const {
		getAuthenticateUserInfo,
		getUserInfoLoading,
		getUserInfoData,
		getRepositoryListLoading,
		getRepositoryListData,
		getUserPublicEventsLoading,
		getUserPublicEventsData,
		clearData,
	} = props;
	const router = useParams();
	const userInfo = getLocalStorage('userInfo');
	const paramsUsername = router.username;

	useEffect(() => {
		if (paramsUsername === userInfo.login) {
			getAuthenticateUserInfo(userInfo.login);
		}
		// fetch(`${process.env.REACT_APP_API_URL}/users/mreza-dehghani/events/public`)
		// 	.then(res => res.json())
		// 	.then(result => console.log(result));
		return () => {
			clearData();
		};
	}, []);
	console.log(getUserPublicEventsData);
	return (
		<Wrapper>
			{getUserInfoLoading && Object.keys(getUserInfoData).length > 0 ? (
				<FullScreenLoading />
			) : (
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
							followersOnClick={() => console.log(true)}
							followingOnClick={() => console.log(true)}
						/>
						{getUserInfoData.links && <UserLinks data={getUserInfoData.links} />}
					</Sidebar>
					<Main>
						{getRepositoryListLoading ? (
							<div className="d-flex justify-content-center align-items-center w-100 py-4">
								<Spinner />
							</div>
						) : (
							<>
								<RepositoryFilter />
								<div className="d-flex justify-content-start align-items-start flex-wrap">
									{getRepositoryListData &&
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
										})}
								</div>
							</>
						)}
						<div className="px-3">
							<div className="mt-4 mb-3">Contribution activity</div>
							{getUserPublicEventsData &&
								getUserPublicEventsData.map((item, index) => {
									return <Activities key={index} date={item.created_at} items={item.items} />;
								})}
						</div>
					</Main>
				</>
			)}
		</Wrapper>
	);
};

const mapStateToProps = state => {
	return {
		getUserInfoLoading: state.Account.getAuthenticateUserInfo.loading,
		getUserInfoData: state.Account.getAuthenticateUserInfo.data,
		getRepositoryListLoading: state.Repository.getRepositoryList.loading,
		getRepositoryListData: state.Repository.getRepositoryList.data,
		getUserPublicEventsLoading: state.Activity.getUserPublicEvents.loading,
		getUserPublicEventsData: state.Activity.getUserPublicEvents.data,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getAuthenticateUserInfo: postData => dispatch(ActionAccount.getAuthenticateUserInfo(postData)),
		clearData: () => {
			dispatch(ActionAccount.getAuthenticateUserInfoFailure());
			dispatch(ActionRepository.getRepositoryListFailure());
			dispatch(ActionActivity.getUserPublicEventsFailure());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
