import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common/';
import * as Actions from '../actions';

class ListItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { library, expanded } = this.props;
		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1, paddingLeft: 5, paddingRight: 5 }}>
						{library.description}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		const { id, title } = this.props.library;
		const { titleStyle } = styles;
		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 5
	}
};

// mapStateToProps is where we pass Application state or state props to components
const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return { expanded };
};

/// connect passes Action object to ListItem component as prop
export default connect(mapStateToProps, Actions)(ListItem);
