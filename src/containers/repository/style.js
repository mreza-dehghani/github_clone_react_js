import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const Wrapper = styled.div`
	background-color: ${variables.colors.white};
	width: 100%;
	height: 100vh;
	.header {
		height: ${pxToRem(80)}rem;
		background-color: ${variables.colors.white};
		padding: 0 ${pxToRem(40)}rem;
		border-bottom: 1px solid ${variables.colors.Alto};
	}
	.clone-code-title {
		font-size: ${variables.fontSize.sm};
		font-weight: ${variables.fontWeight.semibold};
		color: ${variables.colors.black};
	}
	.clone-code-text {
		font-size: ${variables.fontSize.xs};
		font-weight: ${variables.fontWeight.normal};
		color: ${variables.colors.Scorpion};
	}
	.clone-code-input-url {
		width: 100%;
		font-size: ${variables.fontSize.sm};
		font-weight: ${variables.fontWeight.normal};
		padding: ${pxToRem(5)}rem ${pxToRem(6)}rem;
		border-radius: ${pxToRem(6)}rem;
		margin: ${pxToRem(10)}rem 0;
		border: 1px solid ${variables.colors.Gray};
		&:focus {
			outline: none;
		}
	}
`;

export const Container = styled.div`
	width: ${pxToRem(1128)}rem;
	margin: auto;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	padding: ${pxToRem(20)}rem 0;
	overflow: auto;
	.repository-main {
		border-radius: ${pxToRem(8)}rem;
		width: ${pxToRem(800)}rem;
		margin: ${pxToRem(10)}rem;
	}
`;

export const About = styled.div`
	width: ${pxToRem(300)}rem;
	margin: ${pxToRem(4)}rem ${pxToRem(10)}rem;
	border-radius: ${pxToRem(8)}rem;
	min-height: 500px;
	padding: ${pxToRem(10)}rem;
	.repository-title {
		font-size: ${variables.fontSize.base};
		font-weight: ${variables.fontWeight.semibold};
		color: ${variables.colors.black};
	}
	.repository-description {
		font-size: ${variables.fontSize.base};
		font-weight: ${variables.fontWeight.normal};
		color: ${variables.colors.Scorpion};
		line-height: 1.8;
		padding: ${pxToRem(15)}rem 0;
		border-bottom: 1px solid ${variables.colors.WhiteLilac[0]};
	}
	.repository-small-text {
		font-size: ${variables.fontSize.sm};
		font-weight: ${variables.fontWeight.normal};
		color: ${variables.colors.Scorpion};
		line-height: 1.8;
		padding: ${pxToRem(15)}rem 0;
		border-bottom: 1px solid ${variables.colors.WhiteLilac[0]};
	}
	.repository-languages {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		.repository-languages-item {
			width: 50%;
			font-size: ${variables.fontSize.sm};
			font-weight: ${variables.fontWeight.semibold};
			padding: ${pxToRem(2)}rem 0;
			.repository-languages-item-list-type {
				font-size: ${variables.fontSize.ss};
				margin-right: ${pxToRem(5)}rem;
				color: ${variables.colors.BrightSun};
			}
		}
	}
`;

export const Main = styled.div`
	border-radius: ${pxToRem(8)}rem;
	width: 100%;
	background-color: ${variables.colors.white};
	margin-top: ${pxToRem(10)}rem;
	min-height: ${pxToRem(250)}rem;
	max-height: ${pxToRem(400)}rem;
	border: 1px solid ${variables.colors.WhiteLilac[0]};
	overflow: hidden;
	.repository-main-header {
		width: 100%;
		padding: ${pxToRem(10)}rem;
		min-height: ${pxToRem(50)}rem;
		border-bottom: 1px solid ${variables.colors.WhiteLilac[0]};
		background-color: ${variables.colors.LightSuccess};
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.repository-main-list {
		//padding: ${pxToRem(10)}rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.repository-main-list-item {
			margin-bottom: ${pxToRem(10)}rem;
			padding: ${pxToRem(10)}rem;
			border: 1px solid ${variables.colors.WhiteLilac[0]};
			border-radius: ${pxToRem(8)}rem;
			cursor: pointer;
			&:last-child {
				margin-bottom: 0;
			}
		}
		.repository-main-branches {
			min-height: ${pxToRem(200)}rem;
			max-height: ${pxToRem(250)}rem;
			overflow: auto;
			width: 100%;
			padding: ${pxToRem(10)}rem;
			.repository-main-branches-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: ${pxToRem(10)}rem;
				padding: ${pxToRem(10)}rem;
				border: 1px solid ${variables.colors.WhiteLilac[0]};
				border-radius: ${pxToRem(8)}rem;
				cursor: pointer;
				width: 100%;
				.repository-main-branches-title {
				}
			}
		}
	}
`;

export const ReadMe = styled.div`
	border-radius: ${pxToRem(8)}rem;
	width: 100%;
	background-color: ${variables.colors.white};
	margin-top: ${pxToRem(10)}rem;
	min-height: 200px;
	padding: ${pxToRem(10)}rem;
	border: 1px solid ${variables.colors.WhiteLilac[0]};
	.read-me-title {
		font-size: ${variables.fontSize['4xl']};
		font-weight: ${variables.fontWeight.semibold};
		border-bottom: 1px solid ${variables.colors.WhiteLilac[0]};
		padding: ${pxToRem(16)}rem 0;
	}
	.read-me-description {
		font-size: ${variables.fontSize.base};
		font-weight: ${variables.fontWeight.normal};
		color: ${variables.colors.Scorpion};
		line-height: 1.8;
		padding: ${pxToRem(15)}rem 0;
	}
`;
