import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Wrapper, Main, Sidebar } from './style';
import User from './components/user';
import Repository from './components/repository';
import RepositoryFilter from './components/repositoryFilter';

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
			</Main>
		</Wrapper>
	);
};
