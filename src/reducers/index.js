// When an action is dispatched to the store,
// reducers get the action. And then,
// reducers can modify the state with/from that action.

const rootReducer = (state = {}, action) => {
    switch(action.type) {
      case 'APPEND_ACTION_TO_STATE':
        return {
          ...state,
          action
        }
        break;
      case 'FLIP_BOOL_ACTION':
        return Object.assign({}, state, { boolAction: !state.boolAction });
        break;
      default:
        return state
    }
}

export default rootReducer
