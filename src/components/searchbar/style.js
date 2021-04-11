import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: ${pxToRem(5)}rem ${pxToRem(6)}rem;
	height: ${pxToRem(50)}rem;
	${props => {
		switch (props.styleType) {
			case 'pure':
				return `
					width: 100%;
				`;
			default:
				return `
					width: ${pxToRem(270)}rem;
				`;
		}
	}}
`;

export const SearchInput = styled.input`
	width: 100%;
	font-size: ${variables.fontSize.sm};
	font-weight: ${variables.fontWeight.normal};
	padding: ${pxToRem(5)}rem ${pxToRem(6)}rem;
	border-radius: ${pxToRem(6)}rem;
	margin: ${pxToRem(10)}rem 0;
	&:focus {
		outline: none;
	}
	${props => {
		switch (props.styleType) {
			case 'pure':
				return `
					background-color: ${variables.colors.white};
					color: ${variables.colors.black};
					border: 1px solid ${variables.colors.AthensGray};
				`;
			default:
				return `
					background-color: ${variables.colors.black};
					color: ${variables.colors.Silver};
					border: 1px solid ${variables.colors.DustyGray};
					box-shadow: 0 0 1px ${variables.colors.Silver};
				`;
		}
	}}
`;
