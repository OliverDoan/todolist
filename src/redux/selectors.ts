import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Status } from './type'

export const filterStatusSelector = (state: RootState) => state.filterStatus
export const todoListSelector = (state: RootState) => state.todoList

export const todosRemainingSelector = createSelector(todoListSelector, filterStatusSelector, (todoList, status) => {
  if (status === Status.ALL) return todoList
  return todoList.filter((todo) => todo.status === status)
})
