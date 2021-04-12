import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Wrapper, Main, Sidebar } from './style';
import User from './components/user';
import Repository from './components/repository';
import RepositoryFilter from './components/repositoryFilter';
import Activities from './components/activities';

export default () => {
	const router = useParams();
	const username = router.username;

	useEffect(() => {
		return fetch(`https://api.github.com/users/mreza-dehghani/repos`)
			.then(res => res.json())
			.then(result => console.log(result));
	}, []);

	return (
		<Wrapper>
			<Sidebar>
				<User />
			</Sidebar>
			<Main>
				<RepositoryFilter />
				<div className="d-flex justify-content-start align-items-start flex-wrap">
					<Repository />
					<Repository />
					<Repository />
				</div>
				<div className="px-3">
					<div className="mt-4 mb-3">Contribution activity</div>
					<Activities />
					<Activities />
					<Activities />
					<Activities />
				</div>
			</Main>
		</Wrapper>
	);
};
