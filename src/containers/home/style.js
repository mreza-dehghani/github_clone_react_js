import styled from 'styled-components';
import { pxToRem } from '../../helper/style';
import variables from '../../constants/styleVariables';

export const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.main-description {
		.main-description-title {
			font-weight: ${variables.fontWeight.extrabold};
			font-size: ${variables.fontSize['4xl']};
			color: ${variables.colors.white};
			line-height: 1;
		}

		.main-description-text {
			font-weight: ${variables.fontWeight.semibold};
			font-size: ${variables.fontSize.base};
			color: ${variables.colors.Alto};
		}
	}

	.main-item {
		width: 100%;
	}

	@media (min-width: ${variables.breakPoints.laptop}px) {
		flex-direction: row;
		justify-content: flex-start;

		.main-description {
			width: 50%;

			.main-description-title {
				font-size: ${variables.fontSize['6xl']};
			}

			.main-description-text {
				font-size: ${variables.fontSize.lg};
			}
		}
	}
`;
