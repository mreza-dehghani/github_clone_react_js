import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Wrapper, Main } from './style';
import Event from './components/event';
import LeftSidebar from './components/leftSidebar';
import ToggleTheme from './components/toggleTheme';
import { ActionActivity, ActionRepository } from '../../../actions';

const Index = props => {
	const { getPublicEvents, getUserRepository, clearData } = props;

	useEffect(() => {
		fetch('https://api.github.com/events')
			.then(res => res.json())
			.then(data => console.log(data));
	}, []);

	return (
		<Wrapper className="container pt-5">
			<LeftSidebar />
			<Main>
				<div className="public-events">
					<Event />
					<Event />
					<Event />
				</div>
			</Main>
			<div className="toggle-wrapper">
				<ToggleTheme />
			</div>
		</Wrapper>
	);
};

const mapStateToProps = state => {
	return {};
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
