import { Status, TodoState } from './type'
import { createSelector } from 'reselect'
const filterStatusSelector = (state: TodoState) => state.filterStatus
const todoListSelector = (state: TodoState) => state.todoList

export const todosRemainingSelector = createSelector(todoListSelector, filterStatusSelector, (todoList, status) => {
  if (status === Status.ALL) return todoList
  return todoList.filter((todo) => todo.status === status)
})
