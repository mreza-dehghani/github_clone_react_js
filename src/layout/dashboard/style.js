import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const Container = styled.div`
	width: ${pxToRem(1128)}rem;
	margin: 0 auto;
`;

export const Header = styled.div`
	width: 100%;
	height: ${pxToRem(62)}rem;
	background-color: ${variables.colors.black};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 ${pxToRem(30)}rem;
	.header-navbar {
		height: inherit;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.header-navbar-list {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin: 0;
			padding: 0;
			.header-navbar-list-item-link {
				padding: ${pxToRem(8)}rem 0;
				margin: 0 ${pxToRem(10)}rem 0 0;
				.header-navbar-list-item-link {
					color: ${variables.colors.white};
					font-size: ${variables.fontSize.sm};
					font-weight: ${variables.fontWeight.semibold};
				}
				.header-navbar-list-item-link-active {
					color: ${variables.colors.Gray};
				}
			}
		}
	}
`;
