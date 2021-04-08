import React, { Suspense } from 'react';
import Header from './components/header';
import { Main, ContainerFluid } from './style';

export default ({ Component, route }) => {
	return (
		<ContainerFluid>
			<Header />
			<Main>
				<Suspense fallback={<div>Loading ...</div>}>
					<Component route={route} />
				</Suspense>
			</Main>
		</ContainerFluid>
	);
};
