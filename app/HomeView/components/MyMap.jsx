import React from 'react'
import ReactDOM from 'react-dom'
import L from 'leaflet'
//import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class MyMap extends React.Component {
	constructor(props) {
        super(props)
    }
    
    componentDidMount() {
		var position = [43.783, -79.466]
		var map = L.map('map').setView(position, 13) // component with id map
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
		    maxZoom: 18
		}).addTo(map)

        var popup = L.popup();
        this.setState({ resource: 1 });

        function onMapClick(e) {
            var symbol = L.icon({ iconUrl: 'water.png', iconSize: [30, 30] });
            //if (this.state.resource == 1) {
            //    symbol = L.icon({ iconUrl: 'food.png', iconSize: [30, 30] });
            //}
            //else if (this.state.resource == 2) {
            //    symbol = L.icon({ iconUrl: 'shelter.png', iconSize: [30, 30] })
            //}

            L.marker([e.latlng.lat, e.latlng.lng], { icon: symbol}).addTo(map);
            
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
        }
        map.on('click', onMapClick);
    }

    render() {
		return(
			<div id="map">
			</div>
		);
	}
}
