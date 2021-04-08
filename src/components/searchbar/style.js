import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const Wrapper = styled.div`
	width: ${pxToRem(270)}rem;
	height: ${pxToRem(50)}rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: ${pxToRem(5)}rem ${pxToRem(6)}rem;
`;

export const SearchInput = styled.input`
	width: 100%;
	font-size: ${variables.fontSize.sm};
	font-weight: ${variables.fontWeight.normal};
	padding: ${pxToRem(5)}rem ${pxToRem(6)}rem;
	border: 1px solid ${variables.colors.DustyGray};
	border-radius: ${pxToRem(6)}rem;
	margin: ${pxToRem(10)}rem 0;
	box-shadow: 0 0 1px ${variables.colors.Silver};
	background-color: ${variables.colors.black};
	color: ${variables.colors.Silver};
	&:focus {
		outline: none;
	}
`;
