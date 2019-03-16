import React from 'react'

export default class MainView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="MainView">
        <NavBarContainer/>
        {this.props.children}
      </div>
    )
  }
}
