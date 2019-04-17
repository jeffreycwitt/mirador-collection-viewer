import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom';

// import Mirador from "mirador"
// import {actions} from "mirador"

import SidePanel from './SidePanel'

import settings from 'mirador/dist/es/src/config/settings';
import * as actions from 'mirador/dist/es/src/state/actions';

class CollectiionViewer extends Component {
  constructor(props){
    super(props)
    this.state = {
      sideBarMinimized: false,
    }
  }
  componentDidMount(){
  }
  render() {
    const { TargetComponent } = this.props;
    return(
      <div style={{display: "flex", "justify-center": "space-between"}}>
        <div style={{"padding-left": "100px", "overflow": "scroll", height: "100vh"}} >
        <SidePanel dispatch={this.props.dispatch} sideBarMinimized={this.state.sideBarMinimized} handleToggleMinimize={this.handleToggleMinimize}/>
      </div>
      <TargetComponent {...this.props.targetProps} />
      </div>
    )
  }
}

export default {
  target: 'WorkspaceAdd',
  mode: 'wrap',
  component: CollectionViewer,
}
