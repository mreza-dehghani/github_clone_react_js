import React, { useEffect } from 'react';
import { ModalWrapper } from './style';
import Button from '../../components/button';

export default props => {
	const { show, close, footer, header, loading, closeHandler, children, body } = props;
	useEffect(() => {
		if (show) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [show]);
	return (
		<ModalWrapper
			active={true}
			show={show}
			close={close}
			iconColor={header && header.iconColor}
			buttonAlign={footer && footer.footerAlign}
			bigTitle={header && header.bigTitle}
		>
			<div className="overlay" onClick={loading ? () => false : () => closeHandler()} />

			<div className="modal-container">
				<div className="modal-header">
					{header && header.icon && <i className={`modal-title-icon no-select ${header && header.icon}`} />}
					<div
						className="modal-header-title"
						dangerouslySetInnerHTML={{
							__html: (header && header.title) || '',
						}}
					/>
				</div>
				<div className="modal-body">{children || body}</div>
				{footer && (
					<div className="modal-footer">
						{props.footer.buttons &&
							props.footer.buttons.map((items, key) => (
								<React.Fragment key={key}>
									<Button onClick={e => items.clickHandler(e)} loading={loading} type="primary" size="md">
										{items.buttonText}
									</Button>
									{(props.footer.buttons && props.footer.buttons.length - 1) !== key ? (
										<div className="button-separator" />
									) : (
										''
									)}
								</React.Fragment>
							))}
					</div>
				)}
			</div>
		</ModalWrapper>
	);
};
