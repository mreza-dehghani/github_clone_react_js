import React, { Suspense } from 'react';
import Header from './components/header';
import { Container } from './style';

export default ({ Component, route }) => {
	return (
		<div>
			<Header />
			<main>
				<Container>
					<Suspense fallback={<div>Loading ...</div>}>
						<Component route={route} />
					</Suspense>
				</Container>
			</main>
		</div>
	);
};
