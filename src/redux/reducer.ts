import { Action, ActionType, ITodo, Status } from './type'

export type TodoState = {
  todoList: ITodo[]
  filterStatus: Status
}

const initialState: TodoState = {
  todoList: [],
  filterStatus: Status.ALL
}

const rootReducer = (state: TodoState = initialState, action: Action): TodoState => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }

    case ActionType.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload)
      }

    case ActionType.FILTER_STATUS_TODO:
      return {
        ...state,
        filterStatus: action.payload
      }

    default:
      return state
  }
}

export default rootReducer
