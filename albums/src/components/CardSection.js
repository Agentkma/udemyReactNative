//Import libraries for making component
import React from 'react';
import { View } from 'react-native';

// CardSection Component for sections of the Card container styling/ to be reused
const CardSection = props => {
	const { containerStyle } = styles;
	return <View style={containerStyle}>{props.children}</View>;
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
};

export default CardSection;
