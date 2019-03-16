import React from 'react'
import Map from './components/Map.jsx'

require('./stylesheets/HomeView.sass')

export default class HomeView extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateData(), 500)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

	render() {
		return(
			<div className="ViewContainer">
				<Map />
			</div>
		)
	}

}
