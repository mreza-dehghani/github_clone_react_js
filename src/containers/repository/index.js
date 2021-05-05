import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Wrapper, Container, Main, ReadMe } from './style';
import Header from './components/header';
import { ActionRepository } from '../../actions';
import { useEffect, useState } from 'react';
import About from './components/about';
import Branch from './components/branch';
import emptyImg from '../../assets/img/profile-first-pr.svg';
import { getDifferenceTimeFromNow } from '../../helper/date';
import FullScreenLoading from '../../components/fullScreenLoading';
import Branches from './components/branches';
import CloneCodeModal from './components/cloneCodeModal';

const Repository = props => {
	const {
		loading,
		data,
		getRepository,
		getRepositoryBranchesData,
		getRepositoryCommitsData,
		getRepositoryLanguagesData,
		clearData,
	} = props;
	const { username, repo } = useParams();
	const [isShowBranches, setIsShowBranches] = useState(false);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		getRepository({ username, repo });
		return () => {
			clearData();
		};
	}, []);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<Wrapper>
			<CloneCodeModal show={showModal} closeHandler={toggleModal} title="Clone" cloneCodeUrl={data?.clone_url} />
			{loading ? (
				<FullScreenLoading />
			) : (
				<>
					<Header
						userName={username}
						repoName={repo}
						counts={{ watch: data?.watchers_count, star: data?.stargazers_count, fork: data?.forks_count }}
					/>
					<Container>
						<div className="repository-main">
							<Branch
								defaultBranch={data?.default_branch}
								branches={getRepositoryBranchesData}
								toggleBranches={() => setIsShowBranches(!isShowBranches)}
								toggleCloneCode={toggleModal}
							/>
							<Main>
								<div className="repository-main-header">
									<div className="with-three-dot">
										<b>{data?.owner?.login}</b>
										<span className="ml-2">updated at {getDifferenceTimeFromNow(data?.updated_at)}</span>
									</div>
									<div>
										<b>{getRepositoryCommitsData && getRepositoryCommitsData.length}</b>
										<span className="ml-2">Commit</span>
									</div>
								</div>
								<div className="repository-main-list">
									{!isShowBranches ? (
										<img src={emptyImg} alt="" style={{ width: '60%' }} />
									) : (
										<Branches data={getRepositoryBranchesData} />
									)}
								</div>
							</Main>
							<ReadMe>
								<b>README.md</b>
								<div className="px-2">
									<div className="read-me-title with-three-dot" title={repo}>
										{repo}
									</div>
									<p className="read-me-description ">{data?.description}</p>
								</div>
							</ReadMe>
						</div>
						<About description={data?.description} languages={getRepositoryLanguagesData} />
					</Container>
				</>
			)}
		</Wrapper>
	);
};

const mapStateToProps = state => {
	return {
		loading: state.Repository.getRepository.loading,
		data: state.Repository.getRepository.data,
		getRepositoryBranchesData: state.Repository.getRepositoryBranches.data,
		getRepositoryCommitsData: state.Repository.getRepositoryCommits.data,
		getRepositoryLanguagesData: state.Repository.getRepositoryLanguages.data,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getRepository: postData => dispatch(ActionRepository.getRepository(postData)),
		clearData: () => {
			dispatch(ActionRepository.getRepositoryFailure());
			dispatch(ActionRepository.getRepositoryBranchesFailure());
			dispatch(ActionRepository.getRepositoryCommitsFailure());
			dispatch(ActionRepository.getRepositoryLanguagesFailure());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Repository);
