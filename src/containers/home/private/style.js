import styled from 'styled-components';
import { pxToRem } from '../../../helper/style';
import variables from '../../../constants/styleVariables';

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;

	.toggle-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	@media (min-width: ${variables.breakPoints.laptop}px) {
		margin: auto;
		flex-wrap: nowrap;

		.toggle-wrapper {
			width: auto;
			display: block;
		}
	}
`;

export const Sidebar = styled.aside`
	width: 100%;
	background-color: ${variables.colors.white};
	border-radius: ${pxToRem(10)}rem;
	height: auto;
	padding: ${pxToRem(20)}rem ${pxToRem(10)}rem;
	margin: ${pxToRem(15)}rem 0;

	.repository-link {
		font-size: ${variables.fontSize.base};
		color: ${variables.colors.Primary};
		font-weight: ${variables.fontWeight.semibold};
	}

	@media (min-width: ${variables.breakPoints.laptop}px) {
		margin-top: 0;
		width: ${pxToRem(300)}rem;
		padding: ${pxToRem(10)}rem;
	}
`;

export const Main = styled.div`
	width: 100%;
	//background-color: ${variables.colors.white};
	border-radius: ${pxToRem(10)}rem;
	padding: ${pxToRem(10)}rem;
	margin-left: 0;
	min-height: ${pxToRem(500)}rem;
	height: 400px;
	overflow: auto;

	.public-events {
		.public-event-card {
			display: flex;
			justify-content: flex-start;
			align-items: start;
			border-bottom: 1px solid ${variables.colors.AthensGray};

			img {
				height: ${pxToRem(50)}rem;
				width: ${pxToRem(50)}rem;
				border-radius: 50%;
			}

			.user-info-full-name {
				color: ${variables.colors.black};
				font-size: ${variables.fontSize.base};
				font-weight: ${variables.fontWeight.semibold};
			}

			.public-event-repository-card {
				width: 100%;
				background-color: ${variables.colors.white};
				border-radius: ${pxToRem(10)}rem;
				height: auto;
				padding: ${pxToRem(10)}rem;

				.public-event-title {
					font-size: ${variables.fontSize.sm};
					color: ${variables.colors.Scorpion};
					font-weight: ${variables.fontWeight.semibold};
				}
			}
		}
	}

	@media (min-width: ${variables.breakPoints.laptop}px) {
		width: ${pxToRem(600)}rem;
		margin: 0 ${pxToRem(15)}rem ${pxToRem(15)}rem ${pxToRem(15)}rem;

		.public-events {
			margin-right: ${pxToRem(25)}rem;
		}
	}
`;

export const ToggleTheme = styled.aside`
	width: ${pxToRem(200)}rem;
	background-color: ${variables.colors.white};
	border-radius: ${pxToRem(10)}rem;
	height: auto;
	padding: ${pxToRem(10)}rem;
	margin-bottom: 30px;
	min-height: ${pxToRem(150)}rem;
`;
