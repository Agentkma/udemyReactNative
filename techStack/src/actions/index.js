//below function is an 'Action Creator
// it creates an Action , which is a plain JS obj with type and payload
// actions are used to tell our Reducer to update state in a specific way
export const selectLibrary = libraryId => ({
	type: 'select_library',
	payload: libraryId
});
