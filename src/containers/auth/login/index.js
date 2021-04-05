import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Container, LoginBox, LoginBoxContainer, Title } from './style';
import Form from './form';
import { ActionAuth } from '../../../actions';

const Login = props => {
	const { loginLoading, login } = props;

	useEffect(() => {
		// login('mreza-dehghani');
		// fetch('https://api.github.com/users/mreza-dehghani')
		// 	.then(response => {
		// 		console.log(response);
		// 		response.json();
		// 	})
		// 	.then(result => console.log(result));
	}, []);

	const submit = username => {
		login(username);
	};

	return (
		<Container>
			<LoginBoxContainer>
				<Title>Login</Title>
				<LoginBox>
					<div className="login-form-wrapper">
						<Form submit={username => submit(username)} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
