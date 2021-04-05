import React, { Suspense } from 'react';

export default ({ Component, route }) => {
	return (
		<div>
			<header>public layout</header>
			<aside>sidebar</aside>
			<main>
				<Suspense fallback={<div>Loading ...</div>}>
					<Component route={route} />
				</Suspense>
			</main>
		</div>
	);
};
