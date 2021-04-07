import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const CardWrapper = styled.div`
	width: 100%;
	border-radius: ${pxToRem(8)}rem;
	background-color: ${variables.colors.white};
`;

export const CardHeader = styled.div`
	width: 100%;
`;

export const CardBody = styled.div`
	width: 100%;
`;

export const CardFooter = styled.div`
	width: 100%;
`;
