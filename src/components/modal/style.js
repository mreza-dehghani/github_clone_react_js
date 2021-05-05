import styled from 'styled-components';

export const ModalWrapper = styled.div`
	display: ${props => (props.show ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 99999;
	overflow-y: auto;
	max-height: 100vh;
	.overlay {
		background-color: rgba(0, 0, 0, 0.4);
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
	.modal-container {
		border-radius: 10px;
		position: relative;
		z-index: 99999;
		min-width: 320px;
		//min-height: 32%;
		//min-height: 214px;
		-webkit-box-shadow: 0 2px 14px 0 #999;
		-moz-box-shadow: 0 2px 14px 0 #999;
		box-shadow: 0 2px 14px 0 #999;
		background-color: #fff;
		.modal-header {
			height: 60px;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-left: 16px;
			padding-right: 16px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.15);
			.modal-title-icon {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 29px;
				height: 29px;
				&:before {
					margin: 0;
					font-size: 20px;
					color: black;
				}
			}
			.modal-header-title {
				padding: 29px 0;
				width: calc(100% - 45px);
				font-size: 17px;
				color: #333333;
				text-align: center;
				font-weight: 600;
				span {
					color: #ff0000;
				}
			}
			.modal-close-icon {
				cursor: pointer;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 29px;
				height: 29px;
				border-radius: 50%;
				&:before {
					margin: 0;
					font-size: 11px;
					color: #ccc;
				}
				&:hover {
					background-color: gray;
				}
			}
		}
		.modal-body {
			min-height: calc(100% - 130px);
			width: 100%;
			padding-left: 16px;
			padding-right: 16px;
			padding-bottom: 16px;
			max-height: 300px;
			overflow: auto;
		}
		.modal-footer {
			height: 70px;
			width: 100%;
			display: flex;
			justify-content: ${props => props.buttonAlign || 'flex-end'};
			align-items: center;
			padding-left: 16px;
			padding-right: 16px;
			padding-bottom: 10px;
			.button-separator {
				width: 8px;
			}
		}
	}

	@media (min-width: 1024px) {
    .modal-container {
      min-width: 473px;
      //min-height: 32%;
      //min-height: 214px;
	}
`;
