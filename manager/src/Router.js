import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm.js';
import EmployeeList from './components/EmployeeList.js';
import EmployeeCreate from './components/EmployeeCreate.js';

const RouterComponent = () => (
	<Router sceneStyle={{ paddingTop: 10 }}>
		<Scene key="root" hideNavBar>
			<Scene key="auth">
				<Scene initial key="login" component={LoginForm} title="Please Log In" />
			</Scene>
			<Scene key="main">
				<Scene
					initial
					key="employeeList"
					component={EmployeeList}
					title="Employees"
					rightTitle="Add"
					onRight={() => Actions.employeeCreate()}
				/>
				<Scene key="employeeCreate" component={EmployeeCreate} title="Add Employee" />
			</Scene>
		</Scene>
	</Router>
);

export default RouterComponent;

///sceneStyle is a global style tag that will style any scene inside the Router tag
