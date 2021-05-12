import { Suspense } from 'react';
import Header from './components/header';
import { Main, Wrapper } from './style';

export default ({ Component, route }) => {
	return (
		<Wrapper>
			<Header />
			<Main>
				<Suspense fallback={<div>Loading ...</div>}>
					<Component route={route} />
				</Suspense>
			</Main>
		</Wrapper>
	);
};
