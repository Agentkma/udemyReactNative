import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMPLOYEE_UDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from './types.js';

export const employeeUpdate = ({ prop, value }) => ({
	type: EMPLOYEE_UDATE,
	payload: { prop, value }
});

export const employeeCreate = ({ name, phone, shift }) => {
	const { currentUser } = firebase.auth();
	//return object to satisfy ReduxThunk rules
	//pass {type:'reset'} to employeList() so no "Back" arrow appears in header
	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/employees`)
			.push({ name, phone, shift })
			.then(() => {
				dispatch({ type: EMPLOYEE_CREATE });
				Actions.main({ type: 'reset' });
			});
	};
};

export const employeesFetch = () => {
	const { currentUser } = firebase.auth();
	return dispatch => {
		firebase
			.database()
			.ref(`/users/${currentUser.uid}/employees`)
			.on('value', snapshot => {
				dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};
