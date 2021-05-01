import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const Wrapper = styled.div`
	width: ${pxToRem(1128)}rem;
	margin: auto;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	padding: ${pxToRem(30)}rem 0;
	.follower-container {
		border-bottom: 1px solid ${variables.colors.WhiteLilac[0]};
		padding: ${pxToRem(8)}rem 0;
		.user-info-avatar {
			height: ${pxToRem(60)}rem;
			width: ${pxToRem(60)}rem;
			border-radius: 50%;
		}
		.user-info-full-name {
			color: ${variables.colors.black};
			font-size: ${variables.fontSize.base};
			font-weight: ${variables.fontWeight.semibold};
		}
	}
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
	.user-info-links {
		overflow: hidden;
		.user-info-link-item {
			overflow: hidden;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: ${pxToRem(10)}rem;
			cursor: pointer;
			.user-info-link-item-link {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
`;

export const Main = styled.div`
	border-radius: ${pxToRem(8)}rem;
	width: ${pxToRem(850)}rem;
	background-color: ${variables.colors.white};
	margin: ${pxToRem(10)}rem;
	min-height: 500px;
	padding: ${pxToRem(10)}rem;
	.repository-card {
		border-radius: ${pxToRem(8)}rem;
		border: 1px solid ${variables.colors.AthensGray};
		width: calc(100% * (1 / 2) - ${pxToRem(20)}rem);
		margin: ${pxToRem(9)}rem;
		padding: ${pxToRem(16)}rem;
		.repository-link {
			font-size: ${variables.fontSize.base};
			color: ${variables.colors.Primary};
			font-weight: ${variables.fontWeight.semibold};
		}
		.repository-updated-at {
			font-size: ${variables.fontSize.xs};
		}
	}
	.repository-filter {
		.repository-type-dropdown {
			position: absolute;
			top: 120%;
			right: 0;
			font-size: ${variables.fontSize.xs};
			font-weight: ${variables.fontWeight.semibold};
			border-radius: 8px;
			width: ${pxToRem(300)}rem;
			min-height: 68px;
			background-color: ${variables.colors.white};
			box-shadow: 0 0 30px ${variables.colors.WhiteLilac[0]};
			overflow: hidden;
			border: 1px solid ${variables.colors.AthensGray};
			.repository-type-dropdown-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: ${pxToRem(10)}rem;
				cursor: pointer;
				font-weight: ${variables.fontWeight.semibold};
				border-bottom: 1px solid ${variables.colors.AthensGray};
			}
			.repository-type-dropdown-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: ${pxToRem(8)}rem;
				cursor: pointer;
				&:hover {
					background-color: ${variables.colors.LightSuccess};
				}
			}
		}
	}
	.repos {
		min-height: ${pxToRem(300)}rem;
	}
	.activities {
		.activities-date-seprator {
			flex-grow: 2;
			height: 1px;
			background-color: ${variables.colors.Gray};
		}
		.activities-title {
			font-size: ${variables.fontSize.sm};
			color: ${variables.colors.Scorpion};
			font-weight: ${variables.fontWeight.semibold};
		}
	}
`;
