import React from 'react'
import MyMap from './components/MyMap.jsx'
import ConfigModal from './components/ConfigModal.jsx'
import ConfigAid from './components/ConfigAid.jsx'
import { Panel, Grid, Row, Col, Table, Button } from 'react-bootstrap'


require('./stylesheets/HomeView.sass')

const LegendsPanel = (
    <div className="LegendsPanelTitle">
        <h4>Aid Deployment</h4>
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

    show() {
        
    }

	render() {
		return(
			<div className="ViewContainer">
                <MyMap />
                <Panel className="panelTest" header={LegendsPanel} >
                    <Button onClick={this.show}></Button>
                </Panel>
			</div>
		)
	}

}
