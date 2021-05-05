import React, { Suspense, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { Main, ContainerFluid } from './style';
import { getLocalStorage } from '../../helper/localStorage';

export default ({ Component, route }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const userInfo = getLocalStorage('userInfo');
	return (
		<ContainerFluid>
			<Header
				showDropdown={showDropdown}
				toggleDropdown={() => setShowDropdown(!showDropdown)}
				userInfo={{
					avatar: userInfo?.avatar_url,
					fullName: userInfo?.login,
				}}
			/>
			<Main>
				<Suspense fallback={<div>Loading ...</div>}>
					<Component route={route} />
				</Suspense>
			</Main>
			<Footer />
		</ContainerFluid>
	);
};
