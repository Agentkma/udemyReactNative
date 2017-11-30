import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer.js';
import EmployeeFormReducer from './EmployeeFormReducer.js';
import EmployeeReducer from './EmployeeReducer.js';

export default combineReducers({
	auth: AuthReducer,
	employeeForm: EmployeeFormReducer,
	employess: EmployeeReducer
});
