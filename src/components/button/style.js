import styled, { keyframes } from 'styled-components';
import variables from '../../constants/styleVariables';

const RippleAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
`;

export const ButtonWrapper = styled.div`
	cursor: pointer;
	border-radius: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: relative;

	${props => {
		switch (props.type) {
			case 'primary':
				return `
				background-color: ${variables.colors.Primary};
				color: ${variables.colors.white};
			`;
			case 'secondary':
				return `
				background-color: ${variables.colors.Gray};
				color: ${variables.colors.white};
			`;
			case 'warning':
				return `
				background-color: ${variables.colors.Warning};
				color: ${variables.colors.white};
			`;
			case 'success':
				return `
				background-color: ${variables.colors.Success};
				color: ${variables.colors.white};
			`;
			case 'primary-outline':
				return `
				background-color: ${variables.colors.Primary};
				color: ${variables.colors.LightBlue};
				border: 1px solid ${variables.colors.LightBlue};
			`;
			case 'secondary-outline':
				return `
				background-color: ${variables.colors.white};
				color: ${variables.colors.black};
				border: 1px solid ${variables.colors.Gray};
			`;
			case 'warning-outline':
				return `
				background-color: ${variables.colors.white};
				color: ${variables.colors.Warning};
				border: 1px solid ${variables.colors.Warning};
			`;
			case 'success-outline':
				return `
				background-color: ${variables.colors.white};
				color: ${variables.colors.LightSuccess};
				border: 1px solid ${variables.colors.LightSuccess};
			`;

			default:
				return `
				background-color: ${variables.colors.white};
				color: ${variables.colors.LightSuccess};
				border: 1px solid ${variables.colors.LightSuccess};
			`;
		}
	}};
	opacity: ${props => (props.disabled ? '.5' : '1')};
	cursor: ${props => (props.disabled ? 'not-allowed' : '')};
	${props => {
		switch (props.size) {
			case 'sm':
				return `
					padding: 5px 9px;
					font-size: ${variables.fontSize.xs};
					font-weight: ${variables.fontWeight.semibold};
					border-radius: 8px;
					width: 100px;
					height: 32px;
				`;
			case 'md':
				return `
					padding: 10px 18px;
					font-size: ${variables.fontSize.base};
					font-weight: ${variables.fontWeight.semibold};
					border-radius: 8px;
					width: 134px;
					height: 38px;
				`;

			default:
				return `
					padding: 10px 18px;
					font-size: ${variables.fontSize.base};
					font-weight: ${variables.fontWeight.semibold};
					border-radius: 8px;
					width: 134px;
					height: 38px;
				`;
		}
	}};
	@media (min-width: 1024px) {
		${props => {
			switch (props.size) {
				case 'sm':
					return `
					width: 134px;
					height: 32px;
				`;
				case 'md':
					return `
					width: 161px;
					height: 38px;
				`;

				default:
					return `
					width: 161px;
					height: 38px;
				`;
			}
		}};
	}

	.ripple-effect {
		width: 20px;
		height: 20px;
		position: absolute;
		background: #cdcdcd;
		display: block;
		border-radius: 9999px;
		opacity: 1;
		animation: 0.9s ease 1 forwards ${RippleAnimation};
	}
`;
