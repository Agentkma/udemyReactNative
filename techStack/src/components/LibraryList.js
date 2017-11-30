import React, { Component } from 'react';
import { ListView } from 'react-native';
//Connect will connect a component to the redux store..asking for state
import { connect } from 'react-redux';
import ListItem from './ListItem.js';

class LibraryList extends Component {
	componentWillMount() {
		const dataSrc = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = dataSrc.cloneWithRows(this.props.libraries);
	}

	renderRow(library) {
		return <ListItem library={library} />;
	}

	render() {
		return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
	}
}

/* mapStateToProps takes the global application state and then will add parts of it as props to the component, in this case LibraryList*/
const mapStateToProps = state => ({ libraries: state.libraries });

//call Connect()  this immediately returns another function with the LibraryList
export default connect(mapStateToProps)(LibraryList);
