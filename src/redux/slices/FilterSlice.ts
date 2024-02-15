import { Action, ActionType, Status } from '../type'

const filterReducer = (state: Status, action: Action): Status => {
  switch (action.type) {
    case ActionType.FILTER_STATUS_TODO:
      return action.payload

    default:
      return state
  }
}

export default filterReducer
