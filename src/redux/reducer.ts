// const rootReducer = (state: TodoState = initialState, action: Action): TodoState => {
//   switch (action.type) {
//     case ActionType.ADD_TODO:
//       return {
//         ...state,
//         todoList: [...state.todoList, action.payload]
//       }
//     case ActionType.DELETE_TODO:
//       return {
//         ...state,
//         todoList: state.todoList.filter((todo) => todo.id !== action.payload)
//       }
//     case ActionType.FILTER_STATUS_TODO:
//       return {
//         ...state,
//         filterStatus: action.payload
//       }
//     default:
//       return state
//   }
// }
// export default rootReducer
import filterReducer from './slices/FilterSlice'
import todoListReducer from './slices/TodoListSlice'
import { Action, ITodo, Status } from './type'

const initialState: TodoState = {
  todoList: [],
  filterStatus: Status.ALL
}

export type TodoState = {
  todoList: ITodo[]
  filterStatus: Status
}

const rootReducer = (state: TodoState = initialState, action: Action): TodoState => {
  return {
    filterStatus: filterReducer(state.filterStatus, action),
    todoList: todoListReducer(state.todoList, action)
  }
}

export default rootReducer
