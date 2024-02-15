import { Action, ActionType, Status } from '../type'

const initialState: Status = Status.ALL

const filterReducer = (state: Status = initialState, action: Action): Status => {
  switch (action.type) {
    case ActionType.FILTER_STATUS_TODO:
      return action.payload

    default:
      return state
  }
}

export default filterReducer
