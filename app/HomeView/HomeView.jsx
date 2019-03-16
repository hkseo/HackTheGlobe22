import React from 'react'
import Map from './components/Map.jsx'
import ConfigModal from './components/ConfigModal.jsx'
import { Panel, Grid, Row, Col, Table, Button } from 'react-bootstrap'


require('./stylesheets/HomeView.sass')

const LegendsPanel = (
    <div className="LegendsPanelTitle">
        <h4>Map Info</h4>
        <ConfigModal />
    </div>
)

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
                <Panel className="panelTest" header={LegendsPanel} >

                </Panel>
			</div>
		)
	}

}
