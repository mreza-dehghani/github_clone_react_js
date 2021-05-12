import React, { Suspense, useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import SignOutConfirmModal from './components/signOutConfirmModal';
import { Main, ContainerFluid } from './style';
import { clearLocalStorage, getLocalStorage } from '../../helper/localStorage';
import { History } from '../../helper/history';

export default ({ Component, route }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [showConfirmModal, setShowConfirmModal] = useState(false);
	const userInfo = getLocalStorage('userInfo');

	const toggleConfirmModal = () => {
		setShowConfirmModal(!showConfirmModal);
		setShowDropdown(!showDropdown);
	};

	const confirmHandler = async () => {
		await clearLocalStorage();
		await History.replace('/home');
	};

	return (
		<ContainerFluid>
			<SignOutConfirmModal show={showConfirmModal} close={toggleConfirmModal} confirmHandler={confirmHandler} />
			<Header
				showDropdown={showDropdown}
				toggleDropdown={() => setShowDropdown(!showDropdown)}
				showConfirmModal={toggleConfirmModal}
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
