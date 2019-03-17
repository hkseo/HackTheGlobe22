import React from 'react'
import ReactDOM from 'react-dom'
import L from 'leaflet'

export default class MyMap extends React.Component{

	constructor(props) {
        super(props)
        this.state = {
            icon: "water",
            lat: 43.783,
            lng: -79.466
        }
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
        var count = 0;

        function onMapClick(e) {
            var symbol = L.icon({ iconUrl: 'water.png', iconSize: [30, 30] });
            if (count > 4 && count < 8) {
                symbol = L.icon({ iconUrl: 'food.png', iconSize: [30, 30] });
            }
            else if (count > 8) {
                symbol = L.icon({ iconUrl: 'shelter.png', iconSize: [30, 30] })
            }
            if (count > 12) {
                count = -1
            }

            L.marker([e.latlng.lat, e.latlng.lng], { icon: symbol}).addTo(map);
            
            popup
                .setLatLng(e.latlng)
                .setContent("Click Requested on the right side to fill out the form")
                .openOn(map);
            count += 1;
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
