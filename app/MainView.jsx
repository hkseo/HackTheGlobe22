import React from 'react'
import HomeView from './HomeView/HomeView.jsx'

export default class MainView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="MainView">
        {this.props.children}
      </div>
    )
  }
}
