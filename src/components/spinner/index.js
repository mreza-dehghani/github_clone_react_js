import React from 'react';
import spinner from '../../assets/img/spinner.svg';

export default () => {
	const styles = {
		width: '40px',
		height: '40px',
		borderRadius: ' 50%',
	};

	return (
		<div className=" w-full h-full flex justify-center items-center">
			<img src={spinner} alt="Loading..." style={styles} />
		</div>
	);
};
