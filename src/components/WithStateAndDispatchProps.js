import React, { Component } from 'react'
import { connect } from 'react-redux'

class WithStateAndDispatchProps extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h3>WithStateAndDispatchProps.js</h3>
        <div>
          A piece of the state will get added to this component as a prop!
          And it feels like magic :). Value of boolean action:&nbsp;
          { String(this.props.stateAsProp) }
        </div>

        <div>Also, <code>dispatch</code> will get added as a prop</div>
        <button onClick={this.props.flipTheSwitch()}>Switch</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stateAsProp: state.boolAction
})

const mapDispatchToProps = (dispatch) => ({
  flipTheSwitch: dispatch({ type: 'FLIP_BOOL_ACTION' })
})

export default connect(mapStateToProps)(WithStateAndDispatchProps)
