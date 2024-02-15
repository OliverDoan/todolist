import { Action, ActionType, ITodo } from './type'

export type TodoState = {
  todoList: ITodo[]
}

const initialState: TodoState = {
  todoList: []
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

    default:
      return state
  }
}

export default rootReducer
