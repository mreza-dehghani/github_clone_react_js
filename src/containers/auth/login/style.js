import styled from 'styled-components';
import variables from '../../../style/variables';
import { pxToRem } from '../../../style/helper';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${variables.colors.white};
`;

export const LoginBox = styled.div`
	width: ${pxToRem(450)}rem;
	height: ${pxToRem(250)}rem;
	background-color: ${variables.colors.Shamrock};
`;
