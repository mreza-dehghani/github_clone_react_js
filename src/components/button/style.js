import styled from 'styled-components';
import variables from '../../constants/styleVariables';

export const ButtonWrapper = styled.div`
	cursor: pointer;
	border-radius: 32px;
	display: flex;
	justify-content: center;
	align-items: center;

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
					width: 134px;
					height: 32px;
				`;
			case 'md':
				return `
					padding: 10px 18px;
					font-size: ${variables.fontSize.base};
					font-weight: ${variables.fontWeight.semibold};
					border-radius: 8px;
					width: 161px;
					height: 38px;
				`;
		}
	}};
`;
