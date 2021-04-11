import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const ContainerFluid = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;
	overflow: hidden;
`;

export const Main = styled.div`
	width: ${pxToRem(1128)}rem;
	margin: ${pxToRem(62)}rem auto 0 auto;
`;

export const Header = styled.div`
	width: 100%;
	height: ${pxToRem(62)}rem;
	background-color: ${variables.colors.black};
	position: fixed;
	right: 0;
	top: 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	z-index: 999;
	.header-container {
		width: 100%;
		max-width: ${pxToRem(1450)}rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin: auto;

		.header-navbar {
			height: inherit;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0 ${pxToRem(30)}rem;

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
	}
	.app-icon {
		font-size: ${variables.fontSize['4xl']};
		color: ${variables.colors.white};
	}
	.header-plus-icon {
		color: ${variables.colors.white};
	}
	.header-angle-icon {
		font-size: ${variables.fontSize.lg};
		color: ${variables.colors.white};
	}
	.header-avatar-wrapper {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-grow: 2;
	}
`;

export const Avatar = styled.div`
	width: ${pxToRem(50)}rem;
	height: ${pxToRem(50)}rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	position: relative;
	.header-avatar-image {
		width: ${pxToRem(35)}rem;
		height: ${pxToRem(35)}rem;
	}
`;

export const Create = styled.div`
	position: relative;
	margin-right: ${pxToRem(10)}rem;
	cursor: pointer;
`;

export const Dropdown = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	width: ${pxToRem(180)}rem;
	border-radius: ${pxToRem(8)}rem;
	box-shadow: 0 0 30px ${variables.colors.WhiteLilac[0]};
	background-color: ${variables.colors.white};
	.header-avatar-image {
		width: ${pxToRem(35)}rem;
		height: ${pxToRem(35)}rem;
	}
	.dropdown-item-header {
		border-bottom: 1px solid ${variables.colors.WhiteLilac[0]};
		padding: ${pxToRem(10)}rem 0;
		.dropdown-item-header-title {
			padding: ${pxToRem(2)}rem 0 ${pxToRem(6)}rem ${pxToRem(6)}rem;
			color: ${variables.colors.black};
			font-size: ${variables.fontSize.sm};
			font-weight: ${variables.fontWeight.normal};
		}
		.dropdown-item-header-username {
			padding: 0 0 0 ${pxToRem(6)}rem;
			color: ${variables.colors.black};
			font-size: ${variables.fontSize.base};
			font-weight: ${variables.fontWeight.semibold};
		}
	}
	.dropdown-item-footer {
		border-top: 1px solid ${variables.colors.WhiteLilac[0]};
		font-weight: ${variables.fontWeight.semibold};
	}
	.dropdown-item-list {
		padding: ${pxToRem(10)}rem 0;
		.dropdown-item {
			font-size: ${variables.fontSize.sm};
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: ${pxToRem(8)}rem;
			cursor: pointer;
			color: ${variables.colors.black};
			&:hover {
				background-color: ${variables.colors.LightSuccess};
			}
		}
	}
`;
