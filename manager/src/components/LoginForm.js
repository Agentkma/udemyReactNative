import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		//call action creator
		this.props.emailChanged(text);
	}

	onPassworChange(text) {
		//call action creator
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	renderErrorMsg() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={styles.errorTextStyle}>{this.props.error}</Text>
				</View>
			);
		}
	}

	renderBtnOrSpinner() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}
		return <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>;
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="email@email.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
						onChangeText={this.onPassworChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
				{this.renderErrorMsg()}
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

// pass state or state props to component via connect(mapStateToProps)
const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;

	return {
		email,
		password,
		error,
		loading
	};
};
//connect action creators { } to LoginForm component
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
