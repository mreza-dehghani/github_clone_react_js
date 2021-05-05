import styled from 'styled-components';
import { pxToRem } from '../../helper/style';

export const FullPageLoadingWrapper = styled.div`
	.containerStyles {
		z-index: 2222;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #d6d6d66b;
	}
	.loaderStyles {
		top: 50%;
		left: 50%;
		transform: translate(-50%, 0);
		position: absolute;
	}
	img {
		width: ${pxToRem(60)}rem;
		height: ${pxToRem(60)}rem;
		border-radius: 50%;
	}
`;
