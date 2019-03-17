import React from 'react'
import MyMap from './components/MyMap.jsx'
import ConfigModal from './components/ConfigModal.jsx'
import ConfigAid from './components/ConfigAid.jsx'
import { Panel, Grid, Row, Col, Table, Button } from 'react-bootstrap'
import FormContainer from './components/containers/FormContainer.jsx';
import './components/App.css';


require('./stylesheets/HomeView.sass')

const LegendsPanel = (
    <div className="LegendsPanelTitle">
        <h4>Aid Deployment</h4>
        <FormContainer />
    </div>
)

export default class HomeView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: this.props.showModal,
            resource: "water"
        }
        this.show = this.show.bind(this);

    }


    componentDidMount() {
        //this.interval = setInterval(() => this.updateData(), 500)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    show() {
        
    }

    openFormWater() {

    }

	render() {
		return(
			<div className="ViewContainer">
                <MyMap />
                <Panel className="panelTest" header={LegendsPanel} >
                    <h1> Water </h1>   
                        <button type="button" class="btn btn-danger">All</button>
                        <button type="button" class="btn btn-success">Deployed</button>
                        <button type="button" class="btn btn-warning">Requested</button>
                    <br />
                    <br />

                    <h1> Food </h1>
                        <button type="button" class="btn btn-danger">All</button>
                        <button type="button" class="btn btn-success">Deployed</button>
                        <button type="button" class="btn btn-warning">Requested</button>
                    <br />
                    <br />

                    <h1> Shelter </h1>
                        <button type="button" class="btn btn-danger">All</button>
                        <button type="button" class="btn btn-success">Deployed</button>
                        <button type="button" class="btn btn-warning">Requested</button>
                    <br />
                    <br />
                </Panel>
			</div>
		)
	}

}
