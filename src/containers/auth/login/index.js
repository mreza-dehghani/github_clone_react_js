import { connect } from 'react-redux';
import { Container, LoginBox, LoginBoxContainer, Title } from './style';
import Form from './form';
import { ActionAuth } from '../../../actions';
import { useEffect } from 'react';
import { clearLocalStorage } from '../../../helper/localStorage';

const Login = props => {
	const { loginLoading, login } = props;

	useEffect(() => {
		clearLocalStorage();
	}, []);

	const submit = username => {
		login(username);
	};

	return (
		<Container>
			<LoginBoxContainer>
				<Title>Sign In</Title>
				<LoginBox>
					<div className="login-form-wrapper">
						<Form submit={username => submit(username)} loading={loginLoading} />
					</div>
				</LoginBox>
			</LoginBoxContainer>
		</Container>
	);
};

const mapStateToProps = state => {
	return {
		loginLoading: state.Auth.login.loading,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: postData => dispatch(ActionAuth.login(postData)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
