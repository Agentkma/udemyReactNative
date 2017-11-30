import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';

//import child components
import { Header, Button, Spinner, CardSection } from './components/common/';
import LoginForm from './components/LoginForm.js';

class App extends Component {
	constructor(props) {
		super(props);
		//set initial state
		this.state = {
			loggedIn: null
		};
	}

	componentWillMount() {
		Firebase.initializeApp(config);
		// handler for when user is signed in AND signed out
		Firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	showLoginOrLogoutBtn() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => Firebase.auth().signOut()}>Log Out</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return (
					<View>
						<Spinner size="large" />
					</View>
				);
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.showLoginOrLogoutBtn()}
			</View>
		);
	}
}

// Initialize Firebase
const config = {
	apiKey: 'AIzaSyBkJrFMUDbPcdTQwQl9s3lWRuPiSMThJZw',
	authDomain: 'reactauth-c0e30.firebaseapp.com',
	databaseURL: 'https://reactauth-c0e30.firebaseio.com',
	projectId: 'reactauth-c0e30',
	storageBucket: 'reactauth-c0e30.appspot.com',
	messagingSenderId: '359517769287'
};

export default App;
