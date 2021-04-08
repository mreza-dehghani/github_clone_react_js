import styled from 'styled-components';
import variables from '../../../constants/styleVariables';
import { pxToRem } from '../../../helper/style';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${variables.colors.white};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const LoginBoxContainer = styled.div`
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const LoginBox = styled.div`
	width: ${pxToRem(600)}rem;
	height: ${pxToRem(300)}rem;
	//background-color: ${variables.colors.Shamrock};
	border-radius: ${pxToRem(10)}rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.login-form-wrapper {
		width: ${pxToRem(450)}rem;
		margin: auto;
	}
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${pxToRem(15)}rem;
	font-size: ${variables.fontSize['3xl']};
	font-weight: ${variables.fontWeight.extrabold};
`;
