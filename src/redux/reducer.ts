import { combineReducers } from 'redux'
import filterReducer from './slices/FilterSlice'
import todoListReducer from './slices/TodoListSlice'
const rootReducer = combineReducers({
  filterStatus: filterReducer,
  todoList: todoListReducer
})

export default rootReducer
