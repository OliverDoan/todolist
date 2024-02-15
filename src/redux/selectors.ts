import { TodoState } from './reducer'
import { Status } from './type'

export const filterListSelector = (state: TodoState) => state.filterStatus

export const todoListSelector = (state: TodoState) => {
  const status = filterListSelector(state)
  if (status === Status.ALL) return state.todoList

  return state.todoList.filter((todo) => todo.status === status)
}
