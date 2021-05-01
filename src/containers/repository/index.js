import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Wrapper, Container, Main, ReadMe } from './style';
import Header from './components/header';
import { ActionRepository } from '../../actions';
import { useEffect } from 'react';
import About from './components/about';
import Branch from './components/branch';
import emptyImg from '../../assets/img/profile-first-pr.svg';

const Repository = props => {
	const { loading, data, getRepository, clearData } = props;
	const { username, repo } = useParams();

	useEffect(() => {
		getRepository({ username, repo });
		return () => {
			clearData();
		};
	}, []);
	console.log(data);
	return (
		<Wrapper>
			<Header
				userName={username}
				repoName={repo}
				counts={{ watch: data?.watchers_count, star: data?.stargazers_count, fork: data?.forks_count }}
			/>
			<Container>
				<div className="repository-main">
					<Branch defaultBranch={data?.default_branch} />
					<Main>
						<div className="repository-main-header">
							<div>
								<b>{username}</b>
								<span className="ml-2">updated at 1 day ago</span>
							</div>
							<div>
								<b>0</b>
								<span className="ml-2">Commit</span>
							</div>
						</div>
						<div className="repository-main-list">
							<img src={emptyImg} alt="" style={{ width: '60%' }} />
						</div>
					</Main>
					<ReadMe>
						<b>README.md</b>
						<div className="px-2">
							<div className="read-me-title">{repo}</div>
							<p className="read-me-description">{data?.description}</p>
						</div>
					</ReadMe>
				</div>
				<About description={data?.description} languages={[]} />
			</Container>
		</Wrapper>
	);
};

const mapStateToProps = state => {
	return {
		loading: state.Repository.getRepository.loading,
		data: state.Repository.getRepository.data,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getRepository: postData => dispatch(ActionRepository.getRepository(postData)),
		clearData: () => dispatch(ActionRepository.getRepositoryFailure()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
