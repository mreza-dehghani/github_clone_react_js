import React from 'react';
import { ButtonWrapper } from './style';

export default ({ children, type, onClick, size, loading = false, disabled, classes }) => {
	return (
		<ButtonWrapper
			disabled={disabled}
			onClick={disabled ? () => false : onClick}
			className={`no-select ${classes}`}
			type={type}
			size={size}
		>
			{loading ? (
				<div>
					<small>Loading...</small>
				</div>
			) : (
				children
			)}
		</ButtonWrapper>
	);
};
