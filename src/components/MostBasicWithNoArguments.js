import React from 'react'
import { connect } from 'react-redux'

const MostBasicWithNoArguments = ({ dispatch, state }) => (
  <div>
    <h3>MostBasicWithNoArguments.js</h3>
    <div>
      This component gets the whole store as well as the dispatch function
      as a prop. The proof is that this should be a function: { typeof dispatch }.
      Reason why is (from react-redux documentation) because&nbsp;


      <div>
        <code>If you do not supply your own mapDispatchToProps function or object
          full of action creators, the default mapDispatchToProps implementation
          just injects dispatch into your component’s props.
        </code>
      </div>

      <div>
        while this should be an undefined: { typeof state } because&nbsp;

        <code>
          If you dont want to subscribe to store updates, pass null or undefined in
          place of mapStateToProps.
        </code>
      </div>
    </div>
  </div>
)

export default connect()(MostBasicWithNoArguments)
