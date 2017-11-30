//Import libraries for making component
import React, { Component } from 'react';
import Firebase from 'firebase';
import { Text } from 'react-native';

//Import children components
import { Button, Card, CardSection, Input, Spinner } from './common/';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		//set initial state
		this.state = {
			email: '',
			password: '',
			error: '',
			loading: false
		};
	}

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		Firebase.auth()
			.signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				Firebase.auth()
					.createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	onLoginFail() {
		// Handle Errors here.
		/* TODO  want to pass error to this function so can access error message */
		const errorMessage = error.message;

		this.setState({
			loading: false,
			error: `Authentication Failed :(  .....  ${errorMessage}`
		});
	}

	renderBtnOrSpinner() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}

		return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="jonsnow@aol.com"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>
				<Text style={styles.errorTextStyle}>{this.state.error}</Text>
				<CardSection>{this.renderBtnOrSpinner()}</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
