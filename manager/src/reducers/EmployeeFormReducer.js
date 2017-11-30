import { EMPLOYEE_UDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from '../actions/types.js';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMPLOYEE_UDATE:
			// action.payload will be like { prop: "name", value: "Jane"}
			//[action.payload.prop] is ES6 key interpolation
			return { ...state, [action.payload.prop]: action.payload.value };
		case EMPLOYEE_CREATE:
			return { ...state, ...INITIAL_STATE };
		case EMPLOYEES_FETCH_SUCCESS:
			return { ...state, ...INITIAL_STATE };
		default:
			return state;
	}
};
