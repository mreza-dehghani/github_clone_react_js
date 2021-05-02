import Modal from '../../../../components/modal';
import Button from '../../../../components/button';

export default ({ show, title, closeHandler, cloneCodeUrl }) => {
	return (
		<Modal show={show} header={{ title: title }} closeHandler={closeHandler}>
			<div className="clone-code-title">HTTPS</div>
			<input type="text" className="clone-code-input-url" value={cloneCodeUrl} />
			<div className="clone-code-text">Use Git or checkout with SVN using the web URL.</div>
			<div className="d-flex justify-content-center align-items-center mt-4">
				<Button size="md" onClick={closeHandler} type="primary-outline">
					Close
				</Button>
			</div>
		</Modal>
	);
};
