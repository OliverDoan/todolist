// export const filterListSelector = (state: TodoState) => state.filterStatus
// export const todoListSelector = (state: TodoState) => {
//   const status = filterListSelector(state)
//   if (status === Status.ALL) return state.todoList
//   return state.todoList.filter((todo) => todo.status === status)
// }

import { TodoState } from './reducer'
import { Status } from './type'
import { createSelector } from 'reselect'
const filterStatusSelector = (state: TodoState) => state.filterStatus
const todoListSelector = (state: TodoState) => state.todoList

export const todosRemainingSelector = createSelector(todoListSelector, filterStatusSelector, (todoList, status) => {
  if (status === Status.ALL) return todoList
  return todoList.filter((todo) => todo.status === status)
})
