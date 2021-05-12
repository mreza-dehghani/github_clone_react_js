import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Wrapper, Main } from './style';
import Event from './components/event';
import LeftSidebar from './components/leftSidebar';
import ToggleTheme from './components/toggleTheme';
import { ActionActivity, ActionRepository } from '../../../actions';
import { getLocalStorage } from '../../../helper/localStorage';
import Spinner from '../../../components/spinner';
import emptyImg from '../../../assets/img/profile-first-pr.svg';

const Index = props => {
	const {
		getRepositoryListData,
		getPublicEventsLoading,
		getPublicEventsData,
		getPublicEvents,
		getUserRepository,
		clearData,
	} = props;
	const userInfo = getLocalStorage('userInfo');

	useEffect(() => {
		getPublicEvents();
		getUserRepository(userInfo.login);
		return () => {
			clearData();
		};
	}, []);

	return (
		<Wrapper className="container pt-5">
			<LeftSidebar data={getRepositoryListData} username={userInfo.login} />
			<Main>
				<div className="public-events">
					{getPublicEventsLoading && (
						<div className="d-flex justify-content-center">
							<Spinner />
						</div>
					)}
					{getPublicEventsData.length !== 0 &&
						getPublicEventsData.map((item, key) => {
							return <Event key={key} data={item} />;
						})}
					{!getPublicEventsLoading && getPublicEventsData.length === 0 && <img src={emptyImg} />}
				</div>
			</Main>
			<div className="toggle-wrapper">
				<ToggleTheme />
			</div>
		</Wrapper>
	);
};

const mapStateToProps = state => {
	return {
		getRepositoryListData: state.Repository.getRepositoryList.data,
		getPublicEventsLoading: state.Activity.getPublicEvents.loading,
		getPublicEventsData: state.Activity.getPublicEvents.data,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPublicEvents: () => dispatch(ActionActivity.getPublicEvents()),
		getUserRepository: postData => dispatch(ActionRepository.getRepositoryList(postData)),
		clearData: () => {
			dispatch(ActionActivity.getPublicEventsFailure());
			dispatch(ActionRepository.getRepositoryListFailure());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
