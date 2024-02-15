import { Action, ActionType, ITodo } from '../type'

const initialState: ITodo[] = []

const todoListReducer = (state: ITodo[] = initialState, action: Action): ITodo[] => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [...state, action.payload]

    case ActionType.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload)

    default:
      return state
  }
}

export default todoListReducer
