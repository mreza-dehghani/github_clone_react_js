import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	background: linear-gradient(130deg, #090916 50%, #061161 100%);
`;

export const Main = styled.div`
	width: 100%;
	height: calc(100vh - ${pxToRem(62)}rem);
`;

export const Header = styled.div`
	width: 100%;
	height: ${pxToRem(62)}rem;
	background-color: transparent;
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
			background: transparent;

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
	}
	.app-icon {
		font-size: ${variables.fontSize['4xl']};
		color: ${variables.colors.white};
	}

	.header-sign-in {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-grow: 2;
	}
`;
