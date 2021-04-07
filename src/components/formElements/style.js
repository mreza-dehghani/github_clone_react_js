import styled from 'styled-components';
import variables from '../../style/js/variables';
import { pxToRem } from '../../style/js/helper';

export const FormLabelElement = styled.div`
	width: 100%;
	font-size: ${variables.fontSize.base};
	font-weight: ${variables.fontWeight.semibold};
	margin: ${pxToRem(10)}rem 0;
`;

export const FormInputElement = styled.input`
	width: 100%;
	font-size: ${variables.fontSize.sm};
	font-weight: ${variables.fontWeight.normal};
	padding: ${pxToRem(12)}rem ${pxToRem(6)}rem;
	border: 1px solid ${variables.colors.Gray};
	border-radius: ${pxToRem(2)}rem;
	margin: ${pxToRem(10)}rem 0;
	box-shadow: 0 0 1px ${variables.colors.Silver};
	&:focus {
		outline: none;
	}
`;

export const FormGroupElement = styled.div`
	width: 100%;
`;

export const FormTextElement = styled.p`
	width: 100%;
	color: ${variables.colors.VividTangerine};
`;
