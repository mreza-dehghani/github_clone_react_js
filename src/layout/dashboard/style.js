import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const ContainerFluid = styled.div`
	width: 100%;
	margin: 0;
	padding: 0;
`;

export const Main = styled.div`
	width: 100%;
	margin: ${pxToRem(62)}rem auto 0 auto;
	min-height: 600px;
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
		padding: 0 ${pxToRem(10)}rem;

		.header-search-bar {
			display: none;
		}

		.header-menu-icon {
			display: block;
		}

		.header-close-menu-icon {
			position: absolute;
			top: 50%;
			left: 90%;
			width: ${pxToRem(45)}rem;
			height: ${pxToRem(70)}rem;
			background-color: ${variables.colors.black};
			padding: ${pxToRem(10)}rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 0 50% 50% 0;
		}

		.header-navbar {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0 ${pxToRem(30)}rem;
			background: ${variables.colors.black};
			position: fixed;
			top: 0;
			transition: 0.4s;
			height: 100%;
			width: 60%;

			.header-navbar-list {
				display: flex;
				flex-direction: column;
				margin: 0;
				padding: 0;
				justify-content: flex-start;
				align-items: flex-start;

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

		.header-navbar-show {
			left: 0;
		}

		.header-navbar-hide {
			left: -100%;
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

	@media (min-width: ${variables.breakPoints.laptop}px) {
		height: ${pxToRem(62)}rem;

		.header-container {
			width: 100%;
			max-width: ${pxToRem(1450)}rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin: auto;

			.header-search-bar {
				display: block;
			}

			.header-menu-icon {
				display: none;
			}

			.header-close-menu-icon {
				display: none;
			}

			.header-navbar {
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: inherit;
				position: relative;
				width: auto;
				left: 0;

				.header-navbar-list {
					flex-direction: row;
				}
			}
		}
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
		border-radius: 50%;
	}
`;

export const Dropdown = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	width: ${pxToRem(180)}rem;
	border-radius: ${pxToRem(8)}rem;
	box-shadow: 0 10px 30px ${variables.colors.WhiteLilac[0]};
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

export const Footer = styled.div`
	width: 100%;
	height: ${pxToRem(100)}rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-top: 1px solid ${variables.colors.Alto};
	padding: ${pxToRem(20)}rem;
	margin: auto;
	background-color: ${variables.colors.white};

	.app-icon {
		font-size: ${variables.fontSize['4xl']};
		color: ${variables.colors.black};
	}

	.copyright {
		margin-top: ${pxToRem(8)}rem;
		font-size: ${variables.fontSize.xs};
		color: ${variables.fontSize.Scorpion};
	}
`;
