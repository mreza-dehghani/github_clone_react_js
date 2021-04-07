import styled from 'styled-components';
import { pxToRem } from '../../style/js/helper';
import variables from '../../style/js/variables';

export const Container = styled.div`
	width: ${pxToRem(1128)}rem;
	margin: 0 auto;
`;

export const Header = styled.div`
	width: 100%;
	height: ${pxToRem(62)}rem;
	background-color: ${variables.colors.black};
`;
