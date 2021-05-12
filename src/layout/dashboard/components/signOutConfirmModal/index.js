import Modal from '../../../../components/modal';
import Button from '../../../../components/button';

export default ({ show, close, confirmHandler }) => {
	return (
		<Modal show={show} header={{ title: 'Sign Out' }} closeHandler={close}>
			<div className="d-flex justify-content-center align-items-center">Are you sure to Sign Out?</div>
			<div className="d-flex justify-content-center align-items-center mt-4">
				<Button size="sm" type="warning" classes="mr-1" onClick={close}>
					No
				</Button>
				<Button size="sm" type="primary" classes="ml-1" onClick={confirmHandler}>
					Yes
				</Button>
			</div>
		</Modal>
	);
};
