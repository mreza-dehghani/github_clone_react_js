import React, { Suspense } from 'react';

export default ({ Component, route }) => {
	return (
		<>
			<main>
				<Suspense fallback={<div>Loading ...</div>}>
					<Component route={route} />
				</Suspense>
			</main>
		</>
	);
};
