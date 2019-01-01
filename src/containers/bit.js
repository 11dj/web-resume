import React from 'react'
import BitComponent from '../components/bit'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  enableLoading,
  disableLoading
} from '../actions/loading'


// Main container
export class BitContainer extends React.Component {
  render () {
    return (
      <div> 
        <BitComponent {...this.props}/>
      </div>
    )
  }
}

// reducer
const mapStateToProps = (state) => {
  return { 
    action: state.action,
    data: state.data
  }
}

// function 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // loading action
    enableLoading, disableLoading,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BitContainer)
