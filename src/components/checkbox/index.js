import React, { useEffect, useState } from 'react';
import './style.css';

export default ({ checked, name, onClickAction }) => {
	const [isCheck, setIsCheck] = useState(checked);
	const clickHandler = () => {
		setIsCheck(!isCheck);
		onClickAction();
	};
	useEffect(() => {
		setIsCheck(checked);
	}, [checked]);
	return (
		<div className="mx-2">
			<div className={`${isCheck ? 'label-active' : 'label'}`} htmlFor={name} onClick={clickHandler}>
				<div className={`${isCheck ? 'label-bulb-active' : 'label-bulb'}`} />
			</div>
		</div>
	);
};
