import React, { useEffect, useState } from 'react';
import { ButtonWrapper } from './style';

export default ({ children, type, onClick, size, loading = false, disabled, classes, withRipple }) => {
	const [coords, setCoords] = useState({ x: -1, y: -1 });
	const [isRippling, setIsRippling] = useState(false);

	useEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRippling(true);
			setTimeout(() => {
				setIsRippling(false);
			}, 300);
		} else {
			setIsRippling(false);
		}
	}, [coords]);

	useEffect(() => {
		if (!isRippling) {
			setCoords({ x: -1, y: -1 });
		}
	}, [isRippling]);

	const clickHandler = e => {
		const rect = e.target.getBoundingClientRect();
		setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
		onClick && onClick();
	};

	return (
		<ButtonWrapper
			disabled={disabled}
			onClick={disabled ? () => false : e => clickHandler(e)}
			className={`no-select ${classes}`}
			type={type}
			size={size}
		>
			{withRipple && isRippling && (
				<span
					className="ripple-effect"
					style={{
						left: coords.x + 'px',
						top: coords.y + 'px',
					}}
				/>
			)}
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
