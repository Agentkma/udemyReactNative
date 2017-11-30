//Import libraries for making component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

//Axios used for http request related tasks
import Axios from 'axios';

//Import child components
import AlbumDetail from './AlbumDetail.js';

//create component
//props holds values passed in from parent App / root component
class AlbumList extends Component {
	constructor(props) {
		super(props);
		//set initial state/albums array is empty
		this.state = {
			albums: []
		};
	}

	//componentWillMount method will run as soon as component loads
	componentWillMount() {
		/* use Axios to make http request .then (promise) use native setState method to update state => make albums: the array of data*/
		Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response =>
			this.setState({ albums: response.data })
		);
	}

	renderAlbums() {
		//ablum is passed from AlbumList to AlbumDetail component via prop by
		// adding album as attribute={album on the AlbumDetail component tag}
		return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
	}
	// ScrollView enables content to be scrolled on mobile
		/* ***MUST add style prop of flex 1 to root component container when using ScrollView */
	render() {
		return <ScrollView>{this.renderAlbums()}</ScrollView>;
	}
}

export default AlbumList;
