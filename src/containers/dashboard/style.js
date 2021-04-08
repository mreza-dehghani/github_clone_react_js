import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	padding: ${pxToRem(30)}rem 0;
`;

export const Sidebar = styled.div`
	width: ${pxToRem(255)}rem;
	margin: ${pxToRem(10)}rem;
	.user-info {
		.user-info-header {
			border-bottom: 1px solid ${variables.colors.WhiteLilac[0]};
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: ${pxToRem(10)}rem 0;
			.user-info-avatar {
				height: ${pxToRem(68)}rem;
				width: ${pxToRem(68)}rem;
				border-radius: 50%;
			}
			.user-info-full-name {
				color: ${variables.colors.black};
				font-size: ${variables.fontSize.base};
				font-weight: ${variables.fontWeight.semibold};
			}
			.user-info-user-name {
				color: ${variables.colors.DustyGray};
				font-size: ${variables.fontSize.sm};
				font-weight: ${variables.fontWeight.normal};
				margin: ${pxToRem(8)}rem 0;
			}
			.user-info-user-bio {
				color: ${variables.colors.black};
				font-size: ${variables.fontSize.sm};
				font-weight: ${variables.fontWeight.normal};
				margin: 0 0 ${pxToRem(12)}rem 0;
			}
		}
	}
	.user-info-body {
		padding: ${pxToRem(10)}rem 0;
		.user-info-followers {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: ${pxToRem(10)}rem;
			cursor: pointer;
			&:hover {
				background-color: ${variables.colors.LightSuccess};
			}
		}
	}
`;

export const Main = styled.div`
	width: ${pxToRem(850)}rem;
	background-color: red;
	margin: ${pxToRem(10)}rem;
	height: 1000px;
`;
